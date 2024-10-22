/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "*"
                    }
                ]
            }
        ]
    },
    experimental: {
        scrollRestoration: true
    },
    env: {
        VBREST_URL: "https://vbrest.by",
        VIRTUALBREST_URL: "https://virtualbrest.ru",
        LOCALHOST_API_URL: "http://localhost:4000/api",
        PROD_API_URL: "http://photo2.virtualbrest.ru/api",
        LOCALHOST_ROOT_URL: "D:/work/virtualbrest/other",
        PROD_ROOT_URL: "http://photo2.virtualbrest.ru"
    },
    swcMinify: true,
    images: {
        // limit of 25 deviceSizes values
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        // limit of 25 imageSizes values
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // limit of 50 domains values
        domains: ["*"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            },
            {
                protocol: "http",
                hostname: "**"
            }
        ],
        // path prefix for Image Optimization API, useful with `loader`
        path: '/_next/image',
        // loader can be 'default', 'imgix', 'cloudinary', 'akamai', or 'custom'
        loader: 'default',
        // file with `export default function loader({src, width, quality})`
        loaderFile: '',
        // disable static imports for image files
        disableStaticImages: false,
        // minimumCacheTTL is in seconds, must be integer 0 or more
        minimumCacheTTL: 60,
        // ordered list of acceptable optimized image formats (mime types)
        formats: ['image/webp'],
        // enable dangerous use of SVG images
        dangerouslyAllowSVG: false,
        // set the Content-Security-Policy header
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        // when true, every image will be unoptimized
        unoptimized: true
    }
}

export default nextConfig;
