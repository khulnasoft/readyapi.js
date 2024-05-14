# Readyapi Play Button

Have your own custom docs and want API testing built in? Check out our new release Readyapi ▶️ Button which brings up Scalar's simple API Client for you to play around with an endpoint right away

## Installation and Usage

Add the Readyapi Play Button to your page

```
    <script
      id="readyapi-play-button-script"
      data-url="https://petstore3.swagger.io/api/v3/openapi.json"></script>
    <script src="https://cdn.jsdelivr.net/npm/@readyapi/play-button"></script>
```

then add a button with the class and optional readyapi-operation-id

```
    <button
      readyapi-operation-id="getPetById"
      class="readyapi-play-button">Try it Out</button>

```

Now when that button is clicked the Readyapi API Client will open up :)
