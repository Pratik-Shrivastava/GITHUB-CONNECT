import React from 'react';

const FileUpload = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-4 lg:mt-0 bg-gray-100 p-4 rounded-md shadow-md">
            {/* Left side: File upload */}
            <div className="flex items-center mb-4 lg:mb-0">
                <label htmlFor="file-upload" className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">
                    Upload File
                </label>
                <input id="file-upload" type="file" className="hidden" />
            </div>

            {/* Right side: Instructions */}
            <p className="text-center lg:text-left text-gray-700">
                Choose a file to upload. Supported formats: PDF, DOCX, TXT.
            </p>
        </div>
    );
}

export default FileUpload;
