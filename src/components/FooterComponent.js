import React from 'react';


export default function Footer(props) {
    return (
        <React.Fragment>
            <hr id="thickHR" />
            <footer className='site-footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <h5 className='mb-3'>Let's Be Friends</h5>
                            <br />
                            <a className="btn btn-social-icon btn-instagram ml-1 mr-1 ml-md-3 mr-md-3" target="_blank" href="http://instagram.com/" rel="noreferrer"><i className="fa fa-instagram"></i></a>{' '}
                            <a className="btn btn-social-icon btn-facebook ml-1 mr-1 ml-md-3 mr-md-3" target="_blank" href="http://facebook.com/" rel="noreferrer"><i className="fa fa-facebook"></i></a>{' '}
                            <a className="btn btn-social-icon btn-twitter ml-1 mr-1 ml-md-3 mr-md-3" target="_blank" href="http://twitter.com/" rel="noreferrer"><i className="fa fa-twitter"></i></a>{' '} 
                        </div>
                        <div className="col-6">
                        <h5><a href="contact.html">Contact Us</a></h5>
                        <p>708 S Lumina Ave
                             <br />
                            Wrightsville Beach, NC 28480
                             <br />
                            <a role="button" className="btn btn-link" href="tel:+9876543210">(987)867-5309</a><br />
                            <a role="button" className="btn btn-link" href="mailto:behappilyglutenfree@gmail.com">behappilyglutenfree@gmail.com</a>
                        </p>
                       </div>  
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}