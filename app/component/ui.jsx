export default function Ui(){
    return(
        <div id="container3">
            <h1 id="h1">
                Subscribe Newsletter
            </h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Architecto molestiae et soluta est, voluptate pariatur debitis repudiandae deserunt ad cupiditate?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Enim aliquid maiores doloremque. Provident vero excepturi optio ipsam numquam consequuntur harum.
            </p>
            <form id="subscribe-form">
                <label htmlFor="username-input"></label>
                <input
                    id="username-input"
                    type="text"
                    name="username"
                    placeholder="Enter Your Name"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};