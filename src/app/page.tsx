'use client'
import {Button} from "@tremor/react";
import {RiCamera2Fill} from "@remixicon/react";
import Webcam from "react-webcam";
import {useRef, useState} from "react";
import {Attendance} from "@/app/admin/attendance/page";
import moment from "moment";

export default function Home() {
    const webcamRef = useRef<Webcam>(null);
    const [image, setImage] = useState('');


    const [attendance, setAttendance] = useState<Attendance[]>([]);
    const sendImageToServer = async (imageSrc: string) => {
        // Convert Data URL to Blob
        const res = await fetch(imageSrc);
        const blob = await res.blob();

        // Use FormData to send the file as if it were submitted through a form
        let formData = new FormData();
        formData.append('file', blob, 'image.jpg');

        // Send the image to the server via fetch
        fetch('https://185b-104-234-212-123.ngrok-free.app/predictions', { // Adjust the URL as necessary
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(async (data) => {
                const currentDate = new Date();
                const formattedDate = currentDate.toISOString().split('T')[0]; // Gets the date part only
                const formattedTime = currentDate.toTimeString().split(' ')[0]; // Gets the time part only
                const currentHour = currentDate.getHours();
                data.json()
                const itemTime = moment(formattedTime);
                const eightAM = itemTime.clone().set({hour: 8, minute: 0, second: 0, millisecond: 0});

                console.log('Success:', data.json());
                await fetch('/api/attendance', {
                    method: "POST",
                    body: JSON.stringify({
                        name: data.toString() ,
                        profile: "imageSrc",
                        time: new Date(),
                        date: new Date(),
                        status: itemTime.isAfter(eightAM) ? "Late": "Early"
                    })
                })
                alert(`${data} attendance has been taken`)

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const capture = async () => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            console.log(imageSrc);
            setImage(imageSrc);
            await sendImageToServer(imageSrc)
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
                          <div className="flex items-center gap-2">
                              <RiCamera2Fill></RiCamera2Fill>
                              Take Attendance
                          </div>
                      </Button>
                  </div>
          </div>
      </div>
    );
}