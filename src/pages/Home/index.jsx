import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import './home.css'
export default function Home() {
    return (
        <>
            <div className="mb-5">
                <div className="row">
                    <img src="/samenhelpen.jpg" style={{ width: "100%", marginTop: 1 }} />
                </div>
                <div className="row">
                    <h1 style={{ fontSize: 30, margin: 0, fontWeight: 700 }}>
                        By sharing your Data you can help finding a cure and be a part of of the
                        solution!
                    </h1>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <h1 style={{ fontSize: 21, margin: 0, fontWeight: 500, color: "#000000" }}>
                            You at all times keep control of your data and decide who can see it and
                            use it for research.
                        </h1>
                        <a style={{ fontSize: 21, margin: 0, marginLeft: 6, fontWeight: 500 }} href="/faq">
                            Read more...
                        </a>
                    </div>
                </div>

                <div className="row" style={{ background: 'rgb(73, 82, 163)', color: 'white', gap: '5px', display: 'flex', padding: '25px', flexDirection: 'column' }}>
                    <div style={{ marginBottom: 12 }}>
                        <div style={{ display: "flex", gap: "12%", justifyContent: "center" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <h1 style={{ fontSize: 26, margin: 0 }}>I am a</h1>
                                <select name="dropdown" style={{ display: "block", width: 187, marginLeft: 16, height: "2.5rem" }}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <h1 style={{ fontSize: 26, margin: 0 }}>I am</h1>
                                <select name="dropdown" style={{ display: "block", width: 187, marginLeft: 16, height: "2.5rem" }}>
                                    <option value={18}>18 years</option>
                                    <option value={19}>19 years</option>
                                    <option value={20}>20 years</option>
                                    <option value={21}>21 years</option>
                                    <option value={22}>22 years</option>
                                    <option value={23}>23 years</option>
                                    <option value={24}>24 years</option>
                                    <option value={25}>25 years</option>
                                    <option value={26}>26 years</option>
                                    <option value={27}>27 years</option>
                                    <option value={28}>28 years</option>
                                    <option value={29}>29 years</option>
                                    <option value={30}>30 years</option>
                                    <option value={31}>31 years</option>
                                    <option value={32}>32 years</option>
                                    <option value={33}>33 years</option>
                                    <option value={34}>34 years</option>
                                    <option value={35}>35 years</option>
                                    <option value={36}>36 years</option>
                                    <option value={37}>37 years</option>
                                    <option value={38}>38 years</option>
                                    <option value={39}>39 years</option>
                                    <option value={40}>40 years</option>
                                    <option value={41}>41 years</option>
                                    <option value={42}>42 years</option>
                                    <option value={43}>43 years</option>
                                    <option value={44}>44 years</option>
                                    <option value={45}>45 years</option>
                                    <option value={46}>46 years</option>
                                    <option value={47}>47 years</option>
                                    <option value={48}>48 years</option>
                                    <option value={49}>49 years</option>
                                    <option value={50}>50 years</option>
                                    <option value={51}>51 years</option>
                                    <option value={52}>52 years</option>
                                    <option value={53}>53 years</option>
                                    <option value={54}>54 years</option>
                                    <option value={55}>55 years</option>
                                    <option value={56}>56 years</option>
                                    <option value={57}>57 years</option>
                                    <option value={58}>58 years</option>
                                    <option value={59}>59 years</option>
                                    <option value={60}>60 years</option>
                                    <option value={61}>61 years</option>
                                    <option value={62}>62 years</option>
                                    <option value={63}>63 years</option>
                                    <option value={64}>64 years</option>
                                    <option value={65}>65 years</option>
                                    <option value={66}>66 years</option>
                                    <option value={67}>67 years</option>
                                    <option value={68}>68 years</option>
                                    <option value={69}>69 years</option>
                                    <option value={70}>70 years</option>
                                    <option value={71}>71 years</option>
                                    <option value={72}>72 years</option>
                                    <option value={73}>73 years</option>
                                    <option value={74}>74 years</option>
                                    <option value={75}>75 years</option>
                                    <option value={76}>76 years</option>
                                    <option value={77}>77 years</option>
                                    <option value={78}>78 years</option>
                                    <option value={79}>79 years</option>
                                    <option value={80}>80 years</option>
                                    <option value={81}>81 years</option>
                                    <option value={82}>82 years</option>
                                    <option value={83}>83 years</option>
                                    <option value={84}>84 years</option>
                                    <option value={85}>85 years</option>
                                    <option value={86}>86 years</option>
                                </select>
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <h1 style={{ fontSize: 26, margin: 0 }}>I live in</h1>
                                <select name="dropdown" style={{ display: "block", width: 187, marginLeft: 16, height: "2.5rem" }}>
                                    <option>select country</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AX">Aland Islands</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                    <option value="AQ">Antarctica</option>
                                    <option value="AG">Antigua and Barbuda</option>
                                    <option value="AR">Argentina</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AW">Aruba</option>
                                    <option value="AU">Australia</option>
                                    <option value="AT">Austria</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BS">Bahamas</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BB">Barbados</option>
                                    <option value="BY">Belarus</option>
                                    <option value="BE">Belgium</option>
                                    <option value="BZ">Belize</option>
                                    <option value="BJ">Benin</option>
                                    <option value="BM">Bermuda</option>
                                    <option value="BT">Bhutan</option>
                                    <option value="BO">Bolivia</option>
                                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                    <option value="BA">Bosnia and Herzegovina</option>
                                    <option value="BW">Botswana</option>
                                    <option value="BV">Bouvet Island</option>
                                    <option value="BR">Brazil</option>
                                    <option value="IO">British Indian Ocean Territory</option>
                                    <option value="BN">Brunei Darussalam</option>
                                    <option value="BG">Bulgaria</option>
                                    <option value="BF">Burkina Faso</option>
                                    <option value="BI">Burundi</option>
                                    <option value="KH">Cambodia</option>
                                    <option value="CM">Cameroon</option>
                                    <option value="CA">Canada</option>
                                    <option value="CV">Cape Verde</option>
                                    <option value="KY">Cayman Islands</option>
                                    <option value="CF">Central African Republic</option>
                                    <option value="TD">Chad</option>
                                    <option value="CL">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="CX">Christmas Island</option>
                                    <option value="CC">Cocos (Keeling) Islands</option>
                                    <option value="CO">Colombia</option>
                                    <option value="KM">Comoros</option>
                                    <option value="CG">Congo</option>
                                    <option value="CD">Congo, Democratic Republic of the Congo</option>
                                    <option value="CK">Cook Islands</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="CI">Cote D'Ivoire</option>
                                    <option value="HR">Croatia</option>
                                    <option value="CU">Cuba</option>
                                    <option value="CW">Curacao</option>
                                    <option value="CY">Cyprus</option>
                                    <option value="CZ">Czech Republic</option>
                                    <option value="DK">Denmark</option>
                                    <option value="DJ">Djibouti</option>
                                    <option value="DM">Dominica</option>
                                    <option value="DO">Dominican Republic</option>
                                    <option value="EC">Ecuador</option>
                                    <option value="EG">Egypt</option>
                                    <option value="SV">El Salvador</option>
                                    <option value="GQ">Equatorial Guinea</option>
                                    <option value="ER">Eritrea</option>
                                    <option value="EE">Estonia</option>
                                    <option value="ET">Ethiopia</option>
                                    <option value="FK">Falkland Islands (Malvinas)</option>
                                    <option value="FO">Faroe Islands</option>
                                    <option value="FJ">Fiji</option>
                                    <option value="FI">Finland</option>
                                    <option value="FR">France</option>
                                    <option value="GF">French Guiana</option>
                                    <option value="PF">French Polynesia</option>
                                    <option value="TF">French Southern Territories</option>
                                    <option value="GA">Gabon</option>
                                    <option value="GM">Gambia</option>
                                    <option value="GE">Georgia</option>
                                    <option value="DE">Germany</option>
                                    <option value="GH">Ghana</option>
                                    <option value="GI">Gibraltar</option>
                                    <option value="GR">Greece</option>
                                    <option value="GL">Greenland</option>
                                    <option value="GD">Grenada</option>
                                    <option value="GP">Guadeloupe</option>
                                    <option value="GU">Guam</option>
                                    <option value="GT">Guatemala</option>
                                    <option value="GG">Guernsey</option>
                                    <option value="GN">Guinea</option>
                                    <option value="GW">Guinea-Bissau</option>
                                    <option value="GY">Guyana</option>
                                    <option value="HT">Haiti</option>
                                    <option value="HM">Heard Island and Mcdonald Islands</option>
                                    <option value="VA">Holy See (Vatican City State)</option>
                                    <option value="HN">Honduras</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="HU">Hungary</option>
                                    <option value="IS">Iceland</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IR">Iran, Islamic Republic of</option>
                                    <option value="IQ">Iraq</option>
                                    <option value="IE">Ireland</option>
                                    <option value="IM">Isle of Man</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Italy</option>
                                    <option value="JM">Jamaica</option>
                                    <option value="JP">Japan</option>
                                    <option value="JE">Jersey</option>
                                    <option value="JO">Jordan</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="KE">Kenya</option>
                                    <option value="KI">Kiribati</option>
                                    <option value="KP">Korea, Democratic People's Republic of</option>
                                    <option value="KR">Korea, Republic of</option>
                                    <option value="XK">Kosovo</option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Kyrgyzstan</option>
                                    <option value="LA">Lao People's Democratic Republic</option>
                                    <option value="LV">Latvia</option>
                                    <option value="LB">Lebanon</option>
                                    <option value="LS">Lesotho</option>
                                    <option value="LR">Liberia</option>
                                    <option value="LY">Libyan Arab Jamahiriya</option>
                                    <option value="LI">Liechtenstein</option>
                                    <option value="LT">Lithuania</option>
                                    <option value="LU">Luxembourg</option>
                                    <option value="MO">Macao</option>
                                    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                                    <option value="MG">Madagascar</option>
                                    <option value="MW">Malawi</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MV">Maldives</option>
                                    <option value="ML">Mali</option>
                                    <option value="MT">Malta</option>
                                    <option value="MH">Marshall Islands</option>
                                    <option value="MQ">Martinique</option>
                                    <option value="MR">Mauritania</option>
                                    <option value="MU">Mauritius</option>
                                    <option value="YT">Mayotte</option>
                                    <option value="MX">Mexico</option>
                                    <option value="FM">Micronesia, Federated States of</option>
                                    <option value="MD">Moldova, Republic of</option>
                                    <option value="MC">Monaco</option>
                                    <option value="MN">Mongolia</option>
                                    <option value="ME">Montenegro</option>
                                    <option value="MS">Montserrat</option>
                                    <option value="MA">Morocco</option>
                                    <option value="MZ">Mozambique</option>
                                    <option value="MM">Myanmar</option>
                                    <option value="NA">Namibia</option>
                                    <option value="NR">Nauru</option>
                                    <option value="NP">Nepal</option>
                                    <option value="NL">Netherlands</option>
                                    <option value="AN">Netherlands Antilles</option>
                                    <option value="NC">New Caledonia</option>
                                    <option value="NZ">New Zealand</option>
                                    <option value="NI">Nicaragua</option>
                                    <option value="NE">Niger</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="NU">Niue</option>
                                    <option value="NF">Norfolk Island</option>
                                    <option value="MP">Northern Mariana Islands</option>
                                    <option value="NO">Norway</option>
                                    <option value="OM">Oman</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="PW">Palau</option>
                                    <option value="PS">Palestinian Territory, Occupied</option>
                                    <option value="PA">Panama</option>
                                    <option value="PG">Papua New Guinea</option>
                                    <option value="PY">Paraguay</option>
                                    <option value="PE">Peru</option>
                                    <option value="PH">Philippines</option>
                                    <option value="PN">Pitcairn</option>
                                    <option value="PL">Poland</option>
                                    <option value="PT">Portugal</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="QA">Qatar</option>
                                    <option value="RE">Reunion</option>
                                    <option value="RO">Romania</option>
                                    <option value="RU">Russian Federation</option>
                                    <option value="RW">Rwanda</option>
                                    <option value="BL">Saint Barthelemy</option>
                                    <option value="SH">Saint Helena</option>
                                    <option value="KN">Saint Kitts and Nevis</option>
                                    <option value="LC">Saint Lucia</option>
                                    <option value="MF">Saint Martin</option>
                                    <option value="PM">Saint Pierre and Miquelon</option>
                                    <option value="VC">Saint Vincent and the Grenadines</option>
                                    <option value="WS">Samoa</option>
                                    <option value="SM">San Marino</option>
                                    <option value="ST">Sao Tome and Principe</option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SN">Senegal</option>
                                    <option value="RS">Serbia</option>
                                    <option value="CS">Serbia and Montenegro</option>
                                    <option value="SC">Seychelles</option>
                                    <option value="SL">Sierra Leone</option>
                                    <option value="SG">Singapore</option>
                                    <option value="SX">Sint Maarten</option>
                                    <option value="SK">Slovakia</option>
                                    <option value="SI">Slovenia</option>
                                    <option value="SB">Solomon Islands</option>
                                    <option value="SO">Somalia</option>
                                    <option value="ZA">South Africa</option>
                                    <option value="GS">
                                        South Georgia and the South Sandwich Islands
                                    </option>
                                    <option value="SS">South Sudan</option>
                                    <option value="ES">Spain</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SD">Sudan</option>
                                    <option value="SR">Suriname</option>
                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                    <option value="SZ">Swaziland</option>
                                    <option value="SE">Sweden</option>
                                    <option value="CH">Switzerland</option>
                                    <option value="SY">Syrian Arab Republic</option>
                                    <option value="TW">Taiwan, Province of China</option>
                                    <option value="TJ">Tajikistan</option>
                                    <option value="TZ">Tanzania, United Republic of</option>
                                    <option value="TH">Thailand</option>
                                    <option value="TL">Timor-Leste</option>
                                    <option value="TG">Togo</option>
                                    <option value="TK">Tokelau</option>
                                    <option value="TO">Tonga</option>
                                    <option value="TT">Trinidad and Tobago</option>
                                    <option value="TN">Tunisia</option>
                                    <option value="TR">Turkey</option>
                                    <option value="TM">Turkmenistan</option>
                                    <option value="TC">Turks and Caicos Islands</option>
                                    <option value="TV">Tuvalu</option>
                                    <option value="UG">Uganda</option>
                                    <option value="UA">Ukraine</option>
                                    <option value="AE">United Arab Emirates</option>
                                    <option value="GB">United Kingdom</option>
                                    <option value="US">United States</option>
                                    <option value="UM">United States Minor Outlying Islands</option>
                                    <option value="UY">Uruguay</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VU">Vanuatu</option>
                                    <option value="VE">Venezuela</option>
                                    <option value="VN">Viet Nam</option>
                                    <option value="VG">Virgin Islands, British</option>
                                    <option value="VI">Virgin Islands, U.s.</option>
                                    <option value="WF">Wallis and Futuna</option>
                                    <option value="EH">Western Sahara</option>
                                    <option value="YE">Yemen</option>
                                    <option value="ZM">Zambia</option>
                                    <option value="ZW">Zimbabwe</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h1 style={{ fontSize: 39, margin: 0, color: "yellow", fontFamily: '"Charm", cursive' }}>
                            I can help to solve:
                        </h1>
                    </div>
                    <div style={{ height: 280, background: "white", marginTop: 30, overflow: "hidden", borderRadius: 10 }}>
                        <div style={{ height: "100%" }}>
                            <div style={{ height: "80%", display: "flex", flexDirection: "row" }}>
                                <div style={{ width: "20%", padding: "2%" }}>
                                    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <img src="/favicon.ico" style={{ borderRadius: 6, height: "100%", background: "yellow", width: "fit-content" }} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', width: "80%", color: "black", padding: "2%", fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                                    <div>
                                        <div style={{ width: "88%", height: "30%", display: "flex" }}>
                                            <h1 style={{ fontSize: "3rem", margin: 0, fontWeight: 600 }}>Trial 1</h1>
                                        </div>

                                        <div style={{ width: "88%", height: "80%", overflow: "hidden", fontSize: "1.2rem", textAlign: "justify", display: "flex" }}>
                                            <span style={{ height: "100%" }}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="#" className="linkArrow" />
                                    </div>
                                </div>

                            </div>

                            <div style={{ height: "20%", background: "rgb(243, 244, 246)", display: "flex", alignItems: "center", width: "100%", padding: "0 3rem", gap: "2rem" }}>
                                <div style={{ height: "100%", display: "flex", alignContent: "center", color: "black", alignItems: "center", gap: 5 }}>
                                    <img src="https://pic.onlinewebfonts.com/svg/img_218090.png" style={{ width: 25, height: 25 }} />
                                    <span>0 continbutors</span>
                                </div>
                                <div style={{ height: "100%", display: "flex", alignContent: "center", color: "black", alignItems: "center", gap: 5 }}>
                                    <img src="https://pic.onlinewebfonts.com/svg/img_568900.png" style={{ width: 25, height: 25 }} />
                                    <span>0 audiences</span>
                                </div>
                                <div
                                    style={{ height: "100%", display: "flex", alignContent: "center", color: "black", alignItems: "center", gap: 5 }}>
                                    <img src="https://pic.onlinewebfonts.com/svg/img_353628.png" style={{ width: 25, height: 25 }} />
                                    <span>Budget of $0</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}