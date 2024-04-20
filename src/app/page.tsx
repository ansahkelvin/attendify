'use client'
import {Button} from "@tremor/react";
import {RiCamera2Fill} from "@remixicon/react";
import Webcam from "react-webcam";
import {useRef} from "react";

export default function Home() {
    const webcamRef = useRef<Webcam>(null);

    const capture = () => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            // You can now use the imageSrc for face recognition or other processing
            console.log(imageSrc);
        } else {
            console.error('Failed to capture image');
        }
    };
    return (
      <div
          style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
              paddingBottom: '50px'
              // Ensure the background covers the entire viewport height
          }}
          className='flex flex-col h-screen w-full justify-center items-center bg-gray-900 bg-opacity-75'
      >
       <div className="font-bold text-white text-7xl">Welcome to Attendify</div>
          <p className="font-normal text-white text-2x items-center align-middle p-10">
              Please log in to access your personalized dashboard and explore the exciting features and functionalities that Attendify has to offer. Gain insights into your events, manage attendees, and optimize your event planning experience effortlessly. Let&apos;s make your event management journey smooth and efficient!
          </p>

          <div className='text-white flex flex-col items-center justify-center'>
              <div>
                      <Webcam
                          className="w-full h-full"
                          audio={false}
                          ref={webcamRef}
                          screenshotFormat="image/jpeg"
                      />
                      <Button className={'mx-auto'} onClick={capture}>
                          <div className="flex items-center gap-2"><RiCamera2Fill></RiCamera2Fill>
                              Take Attendance
                          </div>
                      </Button>
                  </div>
          </div>
      </div>
    );
}