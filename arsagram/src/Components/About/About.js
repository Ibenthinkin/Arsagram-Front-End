 import React from 'react';

 const About = () => {
    return (    
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <div className="pa3 bt b--black-10">
                    <legend className="f2 fw6 white ph0 mh0">Why Does This Exist?</legend>
                    <p className="db fw6 lh-copy white f4">
                            I made this app to showcase clean, simple react code,
                            rock-solid authentication, API integration, a node/express server, and
                            small database.

                            Just sign in and paste a link to a photo in the box.  Smart Face will
                            detect faces in it!

                            Please feel free to look through the 
                                    <a className='f4 link dim black underline pa3 pointer white'
                                    href='https://github.com/Ibenthinkin/Smart-Face-Front-End'>GitHub Repo</a> 
                            or the 
                                    <a className='f4 link dim black underline pa3 pointer white'
                                    href='https://github.com/Ibenthinkin/Smart-Face-Back-End'>Server Repo</a>
                            or visit my 
                                    <a className='f4 link dim black underline pa3 pointer white'
                                    href='http://benreilly.io'>Website</a> 
                            Thanks for looking!
                        </p>
                </div>
            </article>
    );    
 }
export default About;