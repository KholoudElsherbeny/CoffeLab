<template>
    <div class="">
        <div style="width:96% ;max-width:1400px;margin-inline:auto;">
            <div style="display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding-block: 70px;">
                <img src="@/assets/images/logo_invoice.svg" width="500"/>
                <div>
                    <h1  style="font-size:55px;color:#2a398c;font-weight:700;text-align:end">
                        INVOICE
                    </h1>
                    <p  style="font-size:18px;color:#8f98c5;font-weight:400;text-align:end;padding-block-start:15px">Release Date : <span style="font-size:18px;color:#8f98c5;font-weight:500">30/04/2023</span></p>
                    <p  style="font-size:18px;color:#8f98c5;font-weight:400;text-align:end;padding-block-start:15px">
                        TRN : <span   style="font-size:18px;color:#8f98c5;font-weight:500">100517656300003</span> CN : <span style="font-size:18px;color:#8f98c5;font-weight:500">962731</span>
                    </p>
                </div>
            </div>
        </div>
        <hr style="width:100%;display:block;height:1.5px;color: #8f98c5"/>
        <div style="width:96% ;max-width:1400px;margin-inline:auto;">
            <div style="display: flex;
                        justify-content: space-between;
                        align-items: start;border:1px solid #8f98c5;margin-block:50px">
                        <div style="border-right:1px solid #8f98c5;width:33.33%;text-align:center;min-height:275px;justify-content: center;
                                        display: flex;
                                        padding:30px 45px;
                                        flex-direction: column;
                                        align-items: flex-start;row-gap:8px">
                            <p style="font-size:20px;color:#8f98c5;">
                                Invoice to:
                            </p>
                            <h3  style="font-size:20px;color:#000;font-weight:600">Auto Boutique</h3>
                            <p style="font-size:20px;color:#8f98c5;">
                                autoboutique eg.com
                            </p>
                            <p style="font-size:20px;color:#8f98c5;">
                                +20 1007661199
                            </p>
                            <p style="font-size:20px;color:#8f98c5;">123, address here, NY, USA M 256 5685224
                            </p>
                        </div>
                        <div style="border-right:1px solid #8f98c5;width:33.33%;text-align:center;min-height:275px;height:100%;justify-content: center;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: flex-start;
                                        justify-content:space-between;
                                        padding:30px 45px;row-gap:8px">
                            <p style="font-size:24px;color:#8f98c5;font-weight:300">
                                Invoice no.
                            </p>
                            <p style="font-size:24px;color:#8f98c5;font-weight:300">
                                #02-235974
                            </p>
                            <p style="font-size:24px;color:#8f98c5;font-weight:300">
                                Due Date
                            </p>
                            <p style="font-size:24px;color:#8f98c5;font-weight:300">
                                01-02-2018
                            </p>
                        </div>
                        <div style="width:33.33%;justify-content: center;
                                                display: flex;
                                        padding:30px 45px;
                                                flex-direction: column;
                                        justify-content:center;
                                                align-items: flex-start;min-height:275px;height:100%;row-gap:10px">
                            <p style="font-size:24px;color:#8f98c5;">
                                TOTAL DUE
                            </p>
                            <h1 style="font-size:30px;color:#000;font-weight:700">
                                US $25200.00
                            </h1>
                        </div>
            </div>
            <table style="width:100%">
                <tr style="font-weight:800;font-size:25px;
                margin-block-end:20px;
                            background: aliceblue;">
                    <td style="padding:15px;">Item Description</td>
                    <td style="padding:15px;">Unit Price</td>
                    <td style="padding:15px;">VAT</td>
                    <td style="padding:15px;">Total</td>
                </tr>
                <tr style="font-size:20px;
                margin-block-end:20px;
                            color: #8f98c5;border-bottom:1px solid #8f98c550">
                    <td style="padding:15px;"> Web Design, Business Card Design</td>
                    <td style="padding:15px;">$900.00</td>
                    <td style="padding:15px;">250$ <br><span style="color:#8f98c580">(14% VAT)</span></td>
                    <td style="padding:15px;"> $9000.00</td>
                </tr>
                <tr style="font-size:20px;
                margin-block-end:20px;
                            color: #8f98c5;border-bottom:1px solid #8f98c550">
                    <td style="padding:15px;"> Web Design, Business Card Design</td>
                    <td style="padding:15px;">$900.00</td>
                    <td style="padding:15px;">250$ <br><span style="color:#8f98c580">(14% VAT)</span></td>
                    <td style="padding:15px;"> $9000.00</td>
                </tr>
                <tr style="font-size:20px;
                margin-block-end:20px;
                            color: #8f98c5;border-bottom:1px solid #8f98c550">
                    <td style="padding:15px;"> Web Design, Business Card Design</td>
                    <td style="padding:15px;">$900.00</td>
                    <td style="padding:15px;">250$ <br><span style="color:#8f98c580">(14% VAT)</span></td>
                    <td style="padding:15px;"> $9000.00</td>
                </tr>
                <tr style="font-size:20px;
                margin-block-end:20px;
                            color: #8f98c5;border-bottom:1px solid #8f98c550">
                    <td style="padding:15px;"> Web Design, Business Card Design</td>
                    <td style="padding:15px;">$900.00</td>
                    <td style="padding:15px;">250$ <br><span style="color:#8f98c580">(14% VAT)</span></td>
                    <td style="padding:15px;"> $9000.00</td>
                </tr>
                <tr style="font-size:20px;
                margin-block-end:20px;
                            color: #8f98c5;border-bottom:1px solid #8f98c550">
                    <td style="padding:15px;"> Web Design, Business Card Design</td>
                    <td style="padding:15px;">$900.00</td>
                    <td style="padding:15px;">250$ <br><span style="color:#8f98c580">(14% VAT)</span></td>
                    <td style="padding:15px;"> $9000.00</td>
                </tr>
            </table>
            <div  style="display: flex;
                        justify-content: space-between;
                        align-items: start;margin-block:70px 150px">
                        <div style="
                            min-width:40%;">
                            <h3    style="font-size:25px;font-weight:800;color:#000;padding:8px">Payment Method We Accept</h3>
                            <hr style="width:300px;margin-block:15px;color:#8f98c5;margin-inline-start:8px">
                            <p style="font-size:28px;font-weight:400;color:#8f98c5;padding:8px">Payment</p>
                            <p style="font-size:18px;font-weight:600;color:#8f98c5;padding:8px">Alex Bank</p>
                            <h5   style="font-size:20px;font-weight:800;color:#000;padding:8px">Card Payment </h5>
                            <p style="display: flex;
                            column-gap:14px;
                                    align-items: center; padding:8px">
                                <span style="font-size:18px;font-weight:400;color:#8f98c5">
                                    Bank Account :
                                </span>
                                <span  style="font-size:18px;font-weight:600;color:#8f98c5">
                                    458 598 854 5852
                                </span>
                            </p>
                            <p style="display: flex;
                            column-gap:14px;
                                    align-items: center; padding:8px">
                                <span style="font-size:18px;font-weight:400;color:#8f98c5">
                                    IBAN Number :
                                </span>
                                <span  style="font-size:18px;font-weight:600;color:#8f98c5">
                                    AE1278726700247512001426
                                </span>
                            </p>
                            <p style="display: flex;
                            column-gap:14px;
                                    align-items: center; padding:8px">
                                <span style="font-size:18px;font-weight:400;color:#8f98c5">
                                    Swift Code :
                                </span>
                                <span  style="font-size:18px;font-weight:600;color:#8f98c5">
                                    ADCBAERAA060
                                </span>
                            </p>
                        </div>
                        <div style="
                            min-width:40%;">
                            <p style="display: flex;
                                    justify-content: space-between;
                                    align-items: center; padding:15px">
                                <span style="font-size:25px;font-weight:400;color:#8f98c5">
                                    SUB TOTAL: 
                                </span>
                                <span  style="font-size:25px;font-weight:400;color:#8f98c5">
                                    $25000.00
                                </span>
                            </p>
                            <p style="display: flex;
                                    justify-content: space-between;
                                    align-items: center; padding:15px">
                                <span style="font-size:25px;font-weight:400;color:#8f98c5">
                                    Tax (VAT 14%):
                                </span>
                                <span  style="font-size:25px;font-weight:400;color:#8f98c5">
                                    $350.00
                                </span>
                            </p>
                            <p style="display: flex;
                                    justify-content: space-between;
                                    align-items: center; padding:15px">
                                <span style="font-size:25px;font-weight:400;color:#8f98c5">
                                    Discount (2%):
                                </span>
                                <span  style="font-size:25px;font-weight:400;color:#8f98c5">
                                    -$150.00
                                </span>
                            </p>
                            <p style="display: flex;
                                    justify-content: space-between;
                                    align-items: center;background: aliceblue; padding:15px">
                                <span style="font-size:25px;font-weight:800;color:#000">
                                    Grand Total 
                                </span>
                                <span  style="font-size:25px;font-weight:800;color:#000">
                                    $25200.00
                                </span>
                            </p>
                        </div>
            </div>
        </div>
        <hr style="width:100%;display:block;height:1.5px;color: #8f98c5"/>
        <div style="width:98% ;max-width:1500px;margin-inline:auto;">
            <div style="display: flex;
                        justify-content: space-between;
                        align-items: start;margin-block:50px 100px">
                        <div style="border-right:1px solid #8f98c550;height:160px;width:15%;justify-content: center;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: flex-start;
                                        justify-content:center;
                                        padding:0px 20px;row-gap:8px">
                            <p style="font-size:18px;font-weight:600;color:#8f98c5">UAE - Dubai</p>
                            <p style="font-size:13px;font-weight:400;color:#8f98c5;text-align:left">Deira, Portsaid Road, Sultan Group </p>
                            <p style="font-size:13px;font-weight:400;color:#8f98c5">Makateb, Building Office 402 </p>
                            <p style="font-size:15px;font-weight:600;color:#8f98c5">+971 50 822 4220</p>
                        </div>
                        <div style="border-right:1px solid #8f98c550;height:160px;width:15%;justify-content: center;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: flex-start;
                                        justify-content:center;
                                        padding:0px 20px;row-gap:8px">
                            <p style="font-size:18px;font-weight:600;color:#8f98c5">EGY - Cairo</p>
                            <p style="font-size:13px;font-weight:400;color:#8f98c5;text-align:left">Cairo, Kattameya, One Kattameya, </p>
                            <p style="font-size:13px;font-weight:400;color:#8f98c5">Building 119,Office 74 </p>
                            <p style="font-size:15px;font-weight:600;color:#8f98c5">+201099556719</p>
                        </div>
                        <div style="border-right:1px solid #8f98c550;height:160px;width:15%;justify-content: center;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: flex-start;
                                        justify-content:center;
                                        padding:0px 20px;row-gap:8px">
                            <p style="font-size:18px;font-weight:600;color:#8f98c5">EGY - Mansoura</p>
                            <p style="font-size:13px;font-weight:400;color:#8f98c5;text-align:left">Mansoura - Sandoub, Beside Taha </p>
                            <p style="font-size:13px;font-weight:400;color:#8f98c5">Hussein School, Above Banque Misr </p>
                            <p style="font-size:15px;font-weight:600;color:#8f98c5">+201099556719</p>
                        </div>
                        <div style="border-right:1px solid #8f98c550;height:160px;width:15%;justify-content: center;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: flex-start;
                                        justify-content:center;
                                        padding:0px 20px;row-gap:8px">
                            <p style="font-size:18px;font-weight:600;color:#8f98c5">Website</p>
                            <p style="font-size:13px;font-weight:400;color:#8f98c5;text-align:left">www.alalmiyalhura.com</p>
                        </div>
                        <div style="width:15%;justify-content: center;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: flex-start;
                                        justify-content:center;
                                        padding:0px 20px;row-gap:8px">
                            <p style="font-size:18px;font-weight:600;color:#8f98c5">Email Address</p>
                            <p style="font-size:13px;font-weight:400;color:#8f98c5;text-align:left">www.alalmiyalhura.com</p>
                        </div>
                        <img src="@/assets/images/logo_invoice.svg" width="300"/>
                        </div>

        </div>
    </div>
</template>
<style lang="scss">
.cart_page_wrapper{
    background: #fff;
    // padding-block: 70px;
}
</style>