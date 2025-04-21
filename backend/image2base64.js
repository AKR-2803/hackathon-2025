import fs from 'fs';

const imageToBase64 = (filePath) => {
    // read the image file as a buffer
    const imageBuffer = fs.readFileSync(filePath);

    // xonvert buffer to Base64 string
    const base64String = imageBuffer.toString('base64');

    // return base64 string
    return base64String;
};

// const base64Url = imageToBase64("./output/page-1.jpeg");

export default imageToBase64;