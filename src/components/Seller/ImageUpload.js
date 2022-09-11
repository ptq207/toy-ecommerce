import React, { useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';

const ImageUpload = ({
  onFileUploadSuccess
}) => {
  const [fileName, setFileName] = useState('');
  const [fileUrl, setFileUrl] = useState(null);
  const [fileContent, setFileContent] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    setFileContent(file);
  }

  const handleFileUpload = (e) => {
    e.preventDefault();
    console.log('UPLOAD FILE', fileContent);
    const url = `https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg`;
    onFileUploadSuccess(url);
    setFileUrl(url);
  }

  return (
    <div>
      <Form.Label>Choose image</Form.Label>
      <Image
        src={fileUrl ? fileUrl : "../../static/products/cottoncordel1.jpg"}
        width="80"
        height="80"
      />
      <div className='row'>
        <div className='col'>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" onChange={(e) => handleFileChange(e)} />
          </Form.Group>
        </div>
        <div className='col'>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleFileUpload(e)}
          >
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;