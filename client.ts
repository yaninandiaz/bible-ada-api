import net from "net";

const client = net.createConnection({ port: 3000 });

client.on("connect", () => {
    // Bible requests
    const message = { action: "/bible/all" }
    // const message = { action: "/bible/id", body: { bibleId: "592420522e16049f-01" } }
    // const message = { action: "/bible/id", body: { bibleId: "one bible" } }
    // const message = { action: "/bible/id", body: { bibleId: "" } }
    // const message = { action: "/bible/id", body: { bibleId: null } }
    // const message = { action: "/bible/id", body: {  } }
    // const message = { action: "/bible/id" }

    // Book requests
    // const message = { action: "/book/all", body: { bibleId: "592420522e16049f-01" } }
    // const message = { action: "/book/all", body: { bibleId: "bibleId" } }
    // const message = { action: "/book/all", body: { bibleId: "" } }
    // const message = { action: "/book/all", body: { bibleId: null } }
    // const message = { action: "/book/all", body: { } }
    // const message = { action: "/book/id", body: { bibleId: "592420522e16049f-01", bookId: "HEB" } }
    // const message = { action: "/book/id", body: { bibleId: "592420522e16049f-01", bookId: null } }
    // const message = { action: "/book/id", body: {  } }
    // const message = { action: "/book/id", body: { bibleId: null, bookId: "HEB" } }
    // const message = { action: "/book/id", body: { bibleId: "incorrect id", bookId: "one incorrect id" } }

    // Chapter requests
    // const message = { action: "/chapter/all", body: { bibleId: "592420522e16049f-01", bookId: "JOB" } }
    // const message = { action: "/chapter/all", body: { bibleId: "incorrect bible id", bookId: "JOB" } }
    // const message = { action: "/chapter/all", body: { bibleId: "592420522e16049f-01", bookId: "incorrect book id" } }
    // const message = { action: "/chapter/all", body: { bibleId: null, bookId: null } }
    // const message = { action: "/chapter/all", body: { } }
    // const message = { action: "/chapter/all" }

    // Log requests
    // const message = { action: "/log/all" }

    // Incorrect requests
    // const message = {  }
    // const message = { action: "" }
    // const message = { action: "/request" }

    const response = JSON.stringify(message);
    client.write(response);
});

client.on("data", (serverMessage: string) => {
    const mensaje = serverMessage.toString();

    console.log(mensaje);
});