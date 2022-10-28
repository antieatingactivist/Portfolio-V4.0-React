
const sectionStyle = {
    margin: '10px'
}

export default function MobileFooter() {

    return (
        <section id="contact" style={sectionStyle}>
            <div>

                <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                    <a href="https://github.com/platevoltage/" target="_blank" rel="noopener noreferrer" className="bi bi-github">
                        <span style={{fontSize: '1em'}}> &nbsp; Check out some of my work on GitHub.</span> 
                    </a>
                    <a href="https://discordapp.com/users/866847350059827201" target="_blank" rel="noopener noreferrer" className="bi bi-discord">
                        <span style={{fontSize: '1em'}}> &nbsp; @platevoltage on Discord.</span> 
                    </a>
                    <a href="https://www.linkedin.com/in/garrett-corbin-7a7777227/" target="_blank" rel="noopener noreferrer" className="bi bi-linkedin">
                        <span style={{fontSize: '1em'}}> &nbsp; Connect with me on Linkedin.</span> 
                    </a>
                    <a href="mailto:jgarrettcorbin@gmail.com" className="bi bi-envelope">
                    <span style={{fontSize: '1em'}}> &nbsp; jgarrettcorbin@gmail.com</span> 
                    </a>

                </div>
                <div style={{fontSize: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
                    <p>This site was built by Garrett Corbin in 2021/22 <br /> using React.js and Typescript.</p>
                    <a href="https://github.com/platevoltage/portfolio-v4.0-react" target="_blank" rel="noopener noreferrer">View the source code on GitHub</a>
                </div>
                
            </div>
        </section>
      );
    }