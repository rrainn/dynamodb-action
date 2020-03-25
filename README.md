# dynamodb-action

This GitHub Action allows you to super easily setup a DynamoDB Local instance within GitHub Actions to use DynamoDB within your CI system.

## Example Usage

Below is the default commands and settings for this action. For any properties that are undefined, the value will be false.

#### .github/workflows/ci.yml

```yml
- name: Setup DynamoDB Local
  uses: rrainn/dynamodb-action@v1.0.1
  with:
    dbPath: # undefined by default, if this is undefined inMemory will be used
    sharedDb: # undefined by default
    delayTransientStatuses: # undefined by default
    optimizeDbBeforeStartup: # undefined by default
    port: 8000
    cors: '*'
```
