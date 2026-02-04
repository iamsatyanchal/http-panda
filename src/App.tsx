function App() {
  const status_codes = [
    { code: 100, message: "Continue" },
    { code: 101, message: "Switching Protocols" },
    { code: 102, message: "Processing" },
    { code: 103, message: "Early Hints" },
    { code: 200, message: "OK" },
    { code: 201, message: "Created" },
    { code: 202, message: "Accepted" },
    { code: 203, message: "Non-Authoritative Information" },
    { code: 204, message: "No Content" },
    { code: 205, message: "Reset Content" },
    { code: 206, message: "Partial Content" },
    { code: 207, message: "Multi-Status" },
    { code: 208, message: "Already Reported" },
    { code: 226, message: "IM Used" },
    { code: 300, message: "Multiple Choices" },
    { code: 301, message: "Moved Permanently" },
    { code: 302, message: "Found" },
    { code: 303, message: "See Other" },
    { code: 304, message: "Not Modified" },
    { code: 305, message: "Use Proxy" },
    { code: 307, message: "Temporary Redirect" },
    { code: 308, message: "Permanent Redirect" },
    { code: 400, message: "Bad Request" },
    { code: 401, message: "Unauthorized" },
    { code: 402, message: "Payment Required" },
    { code: 403, message: "Forbidden" },
    { code: 404, message: "Not Found" },
    { code: 405, message: "Method Not Allowed" },
    { code: 406, message: "Not Acceptable" },
    { code: 407, message: "Proxy Authentication Required" },
    { code: 408, message: "Request Timeout" },
    { code: 409, message: "Conflict" },
    { code: 410, message: "Gone" },
    { code: 411, message: "Length Required" },
    { code: 412, message: "Precondition Failed" },
    { code: 413, message: "Payload Too Large" },
    { code: 414, message: "URI Too Long" },
    { code: 415, message: "Unsupported Media Type" },
    { code: 416, message: "Range Not Satisfiable" },
    { code: 417, message: "Expectation Failed" },
    { code: 418, message: "I'm a teapot" },
    { code: 421, message: "Misdirected Request" },
    { code: 422, message: "Unprocessable Entity" },
    { code: 423, message: "Locked" },
    { code: 424, message: "Failed Dependency" },
    { code: 425, message: "Too Early" },
    { code: 426, message: "Upgrade Required" },
    { code: 428, message: "Precondition Required" },
    { code: 429, message: "Too Many Requests" },
    { code: 431, message: "Req. Header Fields Too Large" },
    { code: 451, message: "Unavailable For Legal Reasons" },
    { code: 500, message: "Internal Server Error" },
    { code: 501, message: "Not Implemented" },
    { code: 502, message: "Bad Gateway" },
    { code: 503, message: "Service Unavailable" },
    { code: 504, message: "Gateway Timeout" },
    { code: 505, message: "HTTP Version Not Supported" },
    { code: 506, message: "Variant Also Negotiates" },
    { code: 507, message: "Insufficient Storage" },
    { code: 508, message: "Loop Detected" },
    { code: 510, message: "Not Extended" },
    { code: 511, message: "Network Auth Required" }];
  return (
    <div className=" flex flex-col justify-center items-center bg-green-500/90 bg-[url('./Bamboo-PNG-Pic-Background.png')] bg-no-repeat bg-center bg-cover min-h-screen bg-fixed">
      <div className="text-center py-6">
        <p className="text-8xl text-white mb-2 drop-shadow-[0_1px_10px_rgba(0,0,0,0.6)]">http~pandas!</p>
        <p className="text-[28px] mt-5 text-white drop-shadow-[0px_3px_6px_rgba(0,0,0,0.6)]">~ pandas for every http response status code ~</p>
        <div className="w-full my-4 relative rounded-lg ring-1 ring-gray-900 ring-opacity-5 bg-green-700 block">
          <pre className="block scrollbar-none overflow-auto text-white text-sm leading-normal">
            <code className="inline-block my-3 scrolling-touch subpixel-antialiased text-xl">http-pandas.vercel.app/<span className="text-red-400 font-bold">[code]</span>.jpg</code>
          </pre>
        </div>
      </div>
      <div className="flex flex-col grid grid-cols-3 gap-6 mb-8">
        {status_codes.map((code) => {
          return (
            <div className="bg-white p-2 w-72 rounded-lg border-[2.5px] border-teal-950">
              <span className="absolute px-2 rounded-[0px_0px_6px_0px] text-center bg-white text-lg text-black" key={code.code}>{code.code}</span>
              <img src={`./${code.code}.jpg`} className="w-72 h-72 rounded-[9px_9px_0px_0px] border-[3px] border-white" />
              <p className="text-center px-1 mt-2 text-xl text-black box-shadow-lg" key={code.code}> {code.message}</p>
            </div>
          )
        })}
      </div>
      <div className="mb-10 mt-4">
        <p className="drop-shadow-[0_0px_9px_rgba(0,0,0,0.6)] text-slate-900 text-[23px]">~ Built with lots of 💖 and 🥤 by <span className="relative bottom-[3px] text-[20px] text-white bg-red-500 border-2 border-black rounded-lg px-2 pb-1 pt-0.5">@iamsatyanchal</span> ~</p>
      </div>
    </div>
  )
}
export default App;
