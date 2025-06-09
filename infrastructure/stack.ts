import { CfnOutput, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import {
  Distribution,
  ViewerProtocolPolicy,
  AllowedMethods,
  CachePolicy,
  OriginRequestPolicy,
} from "aws-cdk-lib/aws-cloudfront";
import { S3BucketOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import { Bucket, BlockPublicAccess } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";

interface StoryBookStackProps extends StackProps {
  envName: string;
  namespace: string;
  storybookReleasePath: string;
}

export class StoryBookStack extends Stack {
  constructor(scope: Construct, id: string, props: StoryBookStackProps) {
    super(scope, id, props);
    const resourceName =
      `radix-ui-storybook-${props.envName}-${props.namespace}-bucket`.toLowerCase();

    // Create S3 bucket to store website files
    const siteBucket = new Bucket(this, resourceName, {
      bucketName: resourceName,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL, // Keep bucket private
    });


    // Create CloudFront distribution with modern approach
    const cloudfrontDistribution = new Distribution(
      this,
      `${resourceName}-cf-dist`,
      {

        // Configure the S3 origin - OAC will be created automatically
        defaultBehavior: {
          origin: S3BucketOrigin.withOriginAccessControl(siteBucket),
          viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowedMethods: AllowedMethods.ALLOW_GET_HEAD,
          cachePolicy: CachePolicy.CACHING_OPTIMIZED,
          originRequestPolicy: OriginRequestPolicy.CORS_S3_ORIGIN,
        },

        // Handle 404 errors for single-page applications
        errorResponses: [
          {
            httpStatus: 404,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
          },
        ],
      }
    );

    // Deploy Storybook files to S3
    new BucketDeployment(this, `${resourceName}-Deployment`, {
      sources: [
        Source.asset(new URL("../storybook-static", import.meta.url).pathname),
      ],
      destinationBucket: siteBucket,
      destinationKeyPrefix: `${props.storybookReleasePath}`,
      distribution: cloudfrontDistribution,
      distributionPaths: ["/*"],
      prune: false, // Keep existing files
    });


    // Output the CloudFront URL
    new CfnOutput(this, "cloudfrontUrl", {
      value: `https://${cloudfrontDistribution.distributionDomainName}/`,
    });

    // Output the S3 bucket name
    new CfnOutput(this, "bucketName", {
      value: siteBucket.bucketName,
    });
  }
}
