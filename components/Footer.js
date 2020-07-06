import React, { Component, Fragment } from 'react';
import { Grid, Image, Box, Text, Button, Anchor } from 'grommet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faPinterestP,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default class Footer extends Component {
    render() {
        const { data } = this.props;
        const date = new Date();

        return (
            <Box
                className="boxed-element-no-sides wide-text-background no-margin acc-prbl"
                style={this.props.footerStyle ? this.props.footerStyle : { margin: '0px'}}>
                <Box className="boxed-element-only-sides footer-items acc-prb">
                    <Grid columns={'25vw'} gap="large" className="footer first-grid">
                        {/* first text (contact) */}
                        <Box style={{ width: '100%' }}>
                        <Text
                                // dangerouslySetInnerHTML={{
                                //     __html: data.contact
                                // }}
                            >
                                <p>Quick Contact <br></br>
                                Raven's Nest | Sub Piatra, Transylvania, Romania <br></br>
                                Email: contact@ravensnest.eu<br></br>
                                Copyright © {date.getFullYear()} ravensnest.eu<br></br>
                                All rights Reserved.<br></br>
                                </p>
                            </Text>
                        </Box>


                        {/* social links */}

                        <Box className="contact-links" style={{ width: '100%', marginTop: '5%' }}>
                            <Grid columns={'46px'} gap="medium">
                                <Box>
                                    <Button
                                        icon={
                                            <FontAwesomeIcon
                                                icon={faFacebookF}
                                            />
                                        }
                                        href={data.facebook_link}
                                        target="_blank"
                                        className="icons"
                                    />
                                </Box>

                                <Box>
                                    <Button
                                        icon={
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                            />
                                        }
                                        href={data.instagram_link}
                                        target="_blank"
                                        className="icons"
                                    />
                                </Box>

                                <Box>
                                    <Button
                                        icon={
                                            <FontAwesomeIcon icon={faTwitter} />
                                        }
                                        href={data.twitter_link}
                                        target="_blank"
                                        className="icons"
                                    />
                                </Box>

                                <Box>
                                    <Button
                                        icon={
                                            <FontAwesomeIcon
                                                icon={faPinterestP}
                                            />
                                        }
                                        href={data.pinterest_link}
                                        target="_blank"
                                        className="icons"
                                    />
                                </Box>

                                <Box>
                                    <Button
                                        icon={
                                            <FontAwesomeIcon icon={faYoutube} />
                                        }
                                        href={data.youtube_link}
                                        target="_blank"
                                        className="icons"
                                    />
                                </Box>
                            </Grid>
                        </Box>

                        {/* second text */}
                        <Box style={{ width: '100%', marginTop: '1%' }}>
                            <Text
                                dangerouslySetInnerHTML={{
                                    __html: data.address
                                }}
                            />
                        </Box>

                        
                    {/* </Grid>
                    <Grid
                        columns={'25vw'}
                        gap="large"
                        className="footer first-grid footer-social"
                        
                    > */}
                        <Box  style={{ width: '100%', marginTop: '5%' }}>
                            <Image className="footer-pay" fit="contain" style={{width: '200px'}}src={data.payment_image.url} />
                        </Box>

                        <Box  style={{ width: '100%', marginTop: '5%' }}>
                            {/* <Text dangerouslySetInnerHTML={{__html : data.address}}></Text> */}
                            <Image className="footer-triangle"
                                width='200px'
                                fit="contain"
                                src={'/static/assets/Asset_21.png'}
                                // style={{ minWidth: '285px' }}
                            />
                        </Box>

                        {/* terms & conditions links */}
                        <Box style={{ width: '100%', marginTop: '1%' }}>
                            <Anchor href="/terms-conditions" target="_blank">
                                <span><p style={{marginBottom: 0}}>Terms & Conditions</p> </span>
                            </Anchor>
                            <Anchor href="/privacy" target="_blank">
                                <span><p style={{marginBottom: 0}}>Privacy policy</p> </span>
                            </Anchor>
                            <Anchor href="/reservation-terms" target="_blank">
                                <span><p style={{marginBottom: 0}}>Termeni si conditii generale de rezervare</p></span>
                            </Anchor>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        );
    }
}
