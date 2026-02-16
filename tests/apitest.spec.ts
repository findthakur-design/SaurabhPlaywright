import { request, test, expect   } from "@playwright/test";

test("API Test - GET ", async () => {
    const apiContext = await request.newContext({
        baseURL: process.env.BASE_URL || "https://jsonplaceholder.typicode.com",
        extraHTTPHeaders: {
            "content-Type": "application/json",
            "x-api-key": "your_api_key_here"
        }
    });
    const response = await apiContext.get("/posts/1");
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log("API Response:", responseBody);
    });

    test("API Test - POST ", async () => {
        const apiContext = await request.newContext({
            baseURL: process.env.BASE_URL || "https://jsonplaceholder.typicode.com",    
            extraHTTPHeaders: {
                "content-Type": "application/json",
                "x-api-key": "your_api_key_here"        
            }
        });
        const postData = {
            title: "foo",
            body: "bar"
        }
        const response = await apiContext.post("/posts", { data: postData });
        expect(response.status()).toBe(201);
        const responseBody = await response.json();
        console.log("POST Response:", responseBody);
    });

        

