# gateway-consumer-types

## Installation

This package is published to **GitHub Packages** under the `@samudai` scope. To install it you must
point the `@samudai` scope at the GitHub Packages registry and authenticate with a GitHub token that
has the `read:packages` scope.

1. Add the following to your project's `.npmrc` (replace `YOUR_GITHUB_TOKEN`):

    ```ini
    @samudai:registry=https://npm.pkg.github.com
    //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
    ```

2. Install the package:

    `npm i @samudai/gateway-consumer-types`

## Usage

Import types or enums:

```ts
import { ServiceAMS, Member, Project } from '@samudai/gateway-consumer-types';
import { ProjectEnums, MembersEnums } from '@samudai/gateway-consumer-types';
```

## Types and Enums Available

This package provides TypeScript types, interfaces, and enums for all major services used by the Samudai Gateway Consumer. You can import types and enums for:

- Access Management
- Activity
- DAO
- Dashboard
- Discord
- Discovery
- Discussions
- Form
- Jobs
- Members
- Notifications
- Parcel
- Payment
- Plugins
- Project
- Twitter
- Web3

And more. For a full list, see the `src/index.ts` file in the repository.

## Standard response from gateway-consumer

1. Success response
   `{ message: "Success message", data: <response data> }`
2. Error response
   `{ message: "Error message", error: <Actual error> }`

## Code of Conduct

Please see the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) file for details.

## License

[Apache 2.0](LICENSE)
