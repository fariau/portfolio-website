import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
    return (
        <div id='contact' className='pt-32 container'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div className='space-y-8'>
                    <h2 className='text-5xl'data-aos="zoom-in-up">Get in touch</h2>
                    <p className='text-gray-600 text-[18px] pt-2'>
                        Drop me a line, give me a call, or send me a message by submitting the form.
                    </p>
                    <div className='flex gap-3 items-center'>
                        <AiOutlineMail size={40} /> fariausman@gmail.com
                    </div>
                    <div className='flex gap-3 items-center'>
                        <BsTelephone size={40} /> (021) 123456789
                    </div>
                </div>
                <div className='space-y-8'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name">Name</label>
                        <input type="text"
                            className='h-[40px] bg-transparent border border-red-300'
                            id='name' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email</label>
                        <input type="text"
                            className='h-[40px] bg-transparent border border-red-300'
                            id='email' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="message">message</label>
                        <textarea
                            className='bg-transparent border border-red-300'
                            id='message' rows={8}>
                        </textarea>
                    </div>
                    <button className='bg-red-300 p-2 px-6'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact