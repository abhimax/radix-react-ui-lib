#!/usr/bin/env node
import { App } from "aws-cdk-lib";
import { StoryBookStack } from "./stack";

async function stack() {
  const app = new App();
  const envName: string = app.node.tryGetContext("env");
  const namespace: string = app.node.tryGetContext("namespace")
    ? `-${app.node.tryGetContext("namespace")}`
    : "";
  const storybookReleasePath: string = app.node.tryGetContext(
    "storybookreleasepath"
  )
    ? `${app.node.tryGetContext("storybookreleasepath")}/`
    : "";
  const stackName = `radix-uixw-${envName}${namespace}`;

  new StoryBookStack(app, stackName, {
    // AWS Account and Region implied by the current CLI configuration.
    env: { account: "826406658508", region: "us-east-1" },
    envName,
    namespace,
    storybookReleasePath,
  });
}

stack();
