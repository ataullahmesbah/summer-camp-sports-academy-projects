function ErrorPage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
  
        <h1 className='text-center text-4xl font-bold mt-5 '>Error 404
           <br /> Not Found</h1>
  
        <img src="https://i.ibb.co/7N9R59r/error.jpg" alt="Error" className="object-cover" />
  
        <h1 className="text-4xl font-bold mt-[-64px]">Oops! Page Not Found</h1>
  
        <a href="/" className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back to the Homepage
        </a>
      </div>
    );
  }
  
  export default ErrorPage;