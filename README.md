# InvoiceApp

This project is backend for my fullstack application. To prepare this project I used technology TypeScript, Nest.js, TypeOrm, MySQL database and Passport.js. Application target is simplify create invoices and managment them. I designed and made the views, backend and frontend myself. The application was designed with a mobile first approach. Frontend part application is in progress. To build frontend i use TypeScript and React.js. 


<p align="left">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> &nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> &nbsp;&nbsp;&nbsp; 
<img src="https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg" alt="nestjs" width="40" height="40"/>  &nbsp;&nbsp;&nbsp; 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> &nbsp; &nbsp;&nbsp;&nbsp;
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> &nbsp; &nbsp;&nbsp;&nbsp;
<img src="https://user-images.githubusercontent.com/3450879/82937367-050ae900-9fcb-11ea-9371-8cd0c4bf77a0.png" alt="typeorm" width="80" height="40"/> &nbsp;
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> &nbsp; &nbsp;&nbsp;
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> &nbsp; &nbsp;
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> &nbsp;&nbsp;&nbsp;&nbsp; 
</p>


# The application allows you:
- Create your own clients database,
- Create new invoices,
- Simple invoice management,
- Keep track of statistics,
- Tracking activity history,

# Frontend repository:
https://github.com/LukaszAmbrozewski/InvoiceApp-frontend


## Run project locally - BACKEND

Clone the project

```bash
  git clone https://github.com/lukaszambrozewski/InvoiceApp-backend.git
```

Go to the project directory

```bash
  cd nestapp
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nest start --watch
```

## Backend screens:


#### Register
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624206/InvoiceApp/1_-_Register_aeybvp.png" alt="Login View" width="900"/>

#### Register validation
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624207/InvoiceApp/2_-_Register_-_validation_buppcz.png" alt="Login View" width="900"/>


#### Patch user data
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1665228681/InvoiceApp/Edit/patch_client_1_nxrc4m.jpg" alt="Login View" width="900"/>


#### Patch user data – example validation
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1665228681/InvoiceApp/Edit/patch_client_2_-_example_validation_q4g7cq.jpg" alt="Login View" width="900"/>


#### Patch user data – unauthorized user
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1665228681/InvoiceApp/Edit/patch_client_3_-_unautorized_user_uco9vg.jpg" alt="Login View" width="900"/>


#### Get user data
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624207/InvoiceApp/6_-_GetUserData_f8spei.png" alt="Login View" width="900"/>


#### Login 
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624207/InvoiceApp/7_-_Login_success_htvvxa.png" alt="Login View" width="900"/>


#### Login – invalid login data
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624207/InvoiceApp/8_-_Login_invalid_login_data_t2nmrf.png" alt="Login View" width="900"/>


#### Logout 
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624208/InvoiceApp/9_-_Logout_success_xlajon.png" alt="Login View" width="900"/>


#### Get all clients
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624204/InvoiceApp/10_-_GetAllClients_pxx898.png" alt="Login View" width="900"/>


#### Get one client
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624203/InvoiceApp/11_-_GetOneClient_sxepob.png" alt="Login View" width="900"/>


#### Get one client – client not found
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624207/InvoiceApp/12_-_GetOneClient_-_client_not_found_livixe.png" alt="Login View" width="900"/>


#### Add client 
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624204/InvoiceApp/13_-_Add_Client_-_success_axi7lw.png" alt="Login View" width="900"/>


#### Add client – client is already exist
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624204/InvoiceApp/14_-_Add_Client_-_client_is_already_exist_xjaohk.png" alt="Login View" width="900"/>


#### Add client – invalid data
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624204/InvoiceApp/15_-_Add_Client_-_invalid_data_hk810x.png" alt="Login View" width="900"/>


#### Remove client 
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624204/InvoiceApp/16_-_Remove_Client_-_success_nl02t4.png" alt="Login View" width="900"/>


#### Remove client – client not found
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624205/InvoiceApp/17_-_Remove_Client_-_client_not_found_tle3pg.png" alt="Login View" width="900"/>


#### Patch client
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624205/InvoiceApp/18_-_Patch_Client_-_success_qpnnwi.png" alt="Login View" width="900"/>


#### Patch client – client not found
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624204/InvoiceApp/19_-_Patch_Client_-_client_not_found_kdkgyo.png" alt="Login View" width="900"/>


#### Add invoice
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624205/InvoiceApp/20_-_add_invoice_bfmtly.png" alt="Login View" width="900"/>


#### Patch invoice
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624205/InvoiceApp/21-_patch_invoice_-_success_cr4glv.png" alt="Login View" width="900"/>


#### Patch invoice – invoice not found
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624205/InvoiceApp/22-_patch_invoice_-_not_found_kbjdkh.png" alt="Login View" width="900"/>


#### Get all invoices
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624208/InvoiceApp/23-_GetAllinvoices_fophec.png" alt="Login View" width="900"/>


#### Get one invoice
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624205/InvoiceApp/24-_GetOneinvoices_v5slao.png" alt="Login View" width="900"/>


#### Get one invoice – invoice not found
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624206/InvoiceApp/25-_GetOneinvoices_-_not_found_gjtb6f.png" alt="Login View" width="900"/>


#### Remove one invoice
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624205/InvoiceApp/26-_RemoveOneinvoices_eex9yp.png" alt="Login View" width="900"/>


#### Remove one invoice – invoice not found
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624203/InvoiceApp/27_-_RemoveOneinvoices_-_invoices_not_found_l7caj5.png" alt="Login View" width="900"/>


#### Get all items for invoice
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624207/InvoiceApp/28_-_getAllItemsForInvoice_ppgcit.png" alt="Login View" width="900"/>


#### Get one item for invoice
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624203/InvoiceApp/29_-_getOneItemForInvoice_gdnofa.png" alt="Login View" width="900"/>

#### Get one item for invoice – item not found
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624204/InvoiceApp/30_-_getOneItemForInvoice_-_item_not_found_tbpls2.png" alt="Login View" width="900"/>

#### Remove one item
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624203/InvoiceApp/31_-_remove_one_item_d4tw4l.png" alt="Login View" width="900"/>

#### Remove one item – item not found
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624203/InvoiceApp/32_-_remove_one_item_-_item_not_found_dwedy1.png" alt="Login View" width="900"/>

#### Patch one item 
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624206/InvoiceApp/33_-_patch_one_item_iqegmc.png" alt="Login View" width="900"/>

#### Patch one item – item not found
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624206/InvoiceApp/34_-_patch_one_item_-_item_not_found_uffbel.png" alt="Login View" width="900"/>

#### Patch one item – item values are incorrect
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624206/InvoiceApp/35_-_patch_one_item_-_item_values_are_incorrect_lglmuq.png" alt="Login View" width="900"/>

#### Add one item
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624206/InvoiceApp/36_-_add_one_item_we1cif.png" alt="Login View" width="900"/>

#### Add one item – item values are incorrect
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624206/InvoiceApp/37_-_add_one_item_-_item_values_are_incorrect_an7yea.png" alt="Login View" width="900"/>

#### Add one item – invoice not found
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624206/InvoiceApp/38_-_add_one_item_-_invoice_not_found_t9vjtp.png" alt="Login View" width="900"/>


#### Get stats
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624206/InvoiceApp/39_-_get_stats_vnnvnj.png" alt="Login View" width="900"/>


#### Get history
<img src="https://res.cloudinary.com/dtazubrr1/image/upload/v1663624208/InvoiceApp/40_-_get_history_cnjfan.png" alt="Login View" width="900"/>



## Contact

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/%C5%82ukasz-ambro%C5%BCewski-943a01222" target="blank"><img align="center" src="https://res.cloudinary.com/headhunter/image/upload/v1660399196/MegaK/NicePng_linkedin-icon-png_99356_lcdscx.png" alt="Łukasz-Ambrożewski" height="25" width="100" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto: lukaszambrozewski@gmail.com" target="blank"><img align="center" src="https://res.cloudinary.com/headhunter/image/upload/v1660400374/MegaK/Daco_4064141_jagvmw.png" alt="Łukasz-Ambrożewski" height="22" width="35" />&nbsp;&nbsp;&nbsp;&nbsp;lukaszambrozewski@gmail.com</a></p>

Łukasz Ambrożewski
</p>
