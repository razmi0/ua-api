# TODO

- [x] (#1) Add generator GET endpoint query param length ( example: _/gen?length=5_ )that returns an array of user agent UserAgent[]

  - [ ] (#2) Add generator endpoint query param flags ( example: _/gen?length=5&desktop&firefox&bot_ ) that returns an array of user agent UserAgent[] with the specified attributes :
    - [ ] Desktop or Mobile
    - [ ] Firefox or Chrome or Safari or Edge
    - [ ] Bot or Not Bot
    - [ ] Touch Capable or Not Touch Capable
    - [ ] Tablet or Not Tablet

- [ ] (#3) Add parser GET endpoint query param ua ( example: _/ua?ua=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3_ ) that returns a UserAgent object
- [ ] (#4) Add parser POST endpoint body param ua ( example: _/ua_ ) that returns a UserAgent object

## Done
