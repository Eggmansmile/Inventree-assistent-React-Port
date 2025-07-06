import { useState } from 'react';
import BarcodeScanner from 'react-qr-barcode-scanner';

function Scanner(){
    const [barcode, setBarcode] = useState('No result');

    return (
        <div className="scanner-container">
            <BarcodeScanner
                width={500}
                height={500}
                onUpdate={(err, result) => {
                    if (result) {
                        setBarcode(result.text);
                    }
                }}
            />
            <p>Last Scanned: {barcode}</p>
        </div>
    );
}

export default Scanner;