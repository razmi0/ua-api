# User-Agent Generator and Parser

[MDN User-agent documentation](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent)

## Installation

```bash
npm install
npm run start
```

## Response body data types

```typescript
type UserAgent {
  browser: Browser;
  device: Device;
  os: Browser;
  type: Type;
  ua: string;
}

type Browser {
  name: string;
  version: null | string;
  version_major: number | null;
}

type Device {
  brand: null | string;
  model: null | string;
  name: string;
}

type Type {
  bot: boolean;
  mobile: boolean;
  pc: boolean;
  tablet: boolean;
  touch_capable: boolean;
}
```

## Usage

### Basic URL structure

- Production domain : <https://ua-api.vercel.app/>
- Default port : 3000
- Development domain : <http://localhost:3000/>
- Base path : /api/v1/

### Endpoints

- **GET** /gen (Generate User Agent)

  - **Params** :
    - **length** (optional) : Number of user agent to generate
      - **Location** : Query
      - **Type** : Number
      - **Default** : 1
      - **Return** : UserAgent[]
      - **Example** : _/ua?length=5_

- **GET** /parse (Parse User Agent from url query)

  - **Params** :
    - **ua** (required) : User agent string to parse
      - **Location** : Query
      - **Type** : String
      - **Return** : UserAgent
      - **Example** : _/ua?ua=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3_

- **POST** /parse (Parse User Agent from body request)

  - **Params** :
    - **ua** (required) : User agent string to parse
      - **Location** : Body
      - **Type** : String
      - **Return** : UserAgent
      - **Example** : _{ "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3" }_
