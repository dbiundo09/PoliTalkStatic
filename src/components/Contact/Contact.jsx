import { motion } from 'framer-motion'
import './Contact.css'

function Contact() {
    return (
        <div className="page-container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="contact-page"
            >
                <h2>Meet Our Team</h2>
                <div className="contact-content">
                    <div className="team-section">
                        <div className="team-member">
                            <img src="/dan.jpeg" alt="Dan Biundo" className="team-member-image" />
                            <h3>Dan Biundo - Co-Founder</h3>
                            <p> Dan is a political science major and Software Engineer with a passion for empowering democracy through technology. With experience interning in state legislatures and political campaigns, Dan is combining his deep understanding of the political process with technical expertise to build intuitive, impactful solutions like PoliTalk.</p>
                        </div>

                        <div className="team-member">
                            <img src="/gabe.jpeg" alt="Gabe Garcia" className="team-member-image" />
                            <h3>Gabe Garcia – Co-Founder</h3>
                            <p>Gabe is a finance major with a strong background in government consulting and an interest in startup operations. As a leader in the Start@Shea club at Boston College, he has honed his skills in financial strategy and team management, making him the perfect founder to drive PoliTalk's mission.</p>
                        </div>

                        <div className="team-member">
                            <img src="/isabella.jpeg" alt="Isabella Pieretti" className="team-member-image" />
                            <h3>Isabella Pieretti - CCO</h3>
                            <p>
                                Isabella is a Communications major with expertise in strategic communications and digital storytelling. As Head Podcast Editor at The Heights and through her work with various media organizations, she has developed strong marketing and leadership skills, making her the perfect Chief Communications Officer to drive PoliTalk's mission forward.
                            </p>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h3>Get In Touch</h3>
                        <p>Interested in learning more about PoliTalk? Contact us at:</p>
                        <div className="email-container">
                            <a href="mailto:biundo@bc.edu" className="team-email">biundo@bc.edu</a>
                            <a href="mailto:garciako@bc.edu" className="team-email">garciako@bc.edu</a>
                            <a href="mailto:pieretis@bc.edu" className="team-email">pieretis@bc.edu</a>
                        </div>
                        <hr/>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact 