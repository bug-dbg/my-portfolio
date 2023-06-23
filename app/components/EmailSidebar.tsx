'use client';

const EmailSidebar = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
        <a href="mailto:renactub@gmail.com">
            <p className="text-sm rotate-90 w-72 tracking-wide text-textGreen">renactub@gmail.com</p>
        </a>
         {/* line div */}
      <div className="w-[2px] h-32 bg-textDark"/>
    </div>
    
  )
}

export default EmailSidebar