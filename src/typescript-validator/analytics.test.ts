import { Analytics } from "../analytics";

it("tests analytics", () => {
    const analytics = new Analytics();
    expect(analytics.log({ name: "page_view" }))
        .toBe("logging page_view with key 1");
});

it("tests api key", () => {
    expect(MIXPANEL_API_KEY).toBe("1");
});
