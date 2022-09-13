import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class RisedleDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="57x57"
                        href="/favicon/apple-touch-icon-57x57.png"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default RisedleDocument;
