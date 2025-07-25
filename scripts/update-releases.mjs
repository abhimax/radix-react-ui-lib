#!/usr/bin/env zx
import fs from 'fs';
import path from 'path';

// Path to the releases.json file
const releasesFilePath = path.join(__dirname, '../releases-page/releases.json');

async function fetchReleasesFromGitHub() {
    try {
        const result = await $`gh release list --repo abhimax/radix-react-ui-lib --json name,publishedAt --jq ".[] | {name: .name, publishedAt: .publishedAt}"`;
        console.log('Raw output from gh CLI:', result);
        console.log('Raw output from gh CLI stdout:', result.stdout);

        // Validate if the output is valid JSON
        let releases;
        try {
            releases = JSON.parse(result.stdout);
        } catch (parseError) {
            console.error('Failed to parse JSON from gh CLI output:', parseError);
            console.error('Raw output causing the error:', result.stdout);
            process.exit(1);
        }

        return releases.map(release => ({
            version: release.tag_name,
            date: release.publishedAt.split('T')[0],
            storybookUrl: `https://canopy-ui-storybook.dev.raintreeinc.com/${release.tag_name}/index.html`
        }));
    } catch (error) {
        console.error('Error fetching releases from GitHub using gh CLI:', error);
        process.exit(1);
    }
}

async function updateReleasesFile() {
    const releases = await fetchReleasesFromGitHub();

    try {
        fs.writeFileSync(releasesFilePath, JSON.stringify(releases, null, 4), 'utf-8');
        console.log('Releases updated successfully.');
    } catch (error) {
        console.error('Error writing to releases.json:', error);
        process.exit(1);
    }
}

updateReleasesFile();