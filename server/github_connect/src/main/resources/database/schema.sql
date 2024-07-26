CREATE TABLE IF NOT EXISTS annexure_d
(
    id                       BIGSERIAL PRIMARY KEY NOT NULL,
    weaver_name              VARCHAR(255)          NOT NULL,
    weaver_id                VARCHAR(255)          NOT NULL,
    mobile_number            BIGINT                NOT NULL,
    address_line_1           TEXT                          ,
    address_line_2           TEXT                          ,
    city                     VARCHAR(255)                  ,
    state                    VARCHAR(255)                  ,
    pincode                  BIGINT                        ,
    district                 VARCHAR(255)                  ,
    doh_office               VARCHAR(255)                  ,
    country                  VARCHAR(255)                  ,
    aadhar_number            BIGINT                 ,
    pan_number               VARCHAR(255)           ,
    is_registered_under_ssy  BOOLEAN DEFAULT FALSE,
    ssy_registration_number  VARCHAR(255),
    bank_account_number      BIGINT                 ,
    bank_name_with_branch    VARCHAR(255)           ,
    ifsc_code                VARCHAR(255)           ,
    loom_shed_address        TEXT                   ,
    number_of_looms          BIGINT                 ,
    type_of_product_produced VARCHAR(255)           ,
    total_production         VARCHAR(255)           ,
    total_sales_turnover     BIGINT                 ,
    renovation_details       TEXT                   ,
    amount_claimed           BIGINT                 ,
    has_received_incentive   BOOLEAN DEFAULT FALSE,
    scheme_details           TEXT,
    status                   VARCHAR(20),
    annexure_d_proof        VARCHAR(255),
    annexure_di_proof       VARCHAR(255),
    weaver_id_proof         VARCHAR(255),
    pan_card_proof          VARCHAR(255),
    bank_doc_proof          VARCHAR(255),
    ssy_card_proof          VARCHAR(255),
    address_proof           VARCHAR(255),
    id_proof                VARCHAR(255)

);

CREATE TABLE IF NOT EXISTS annexure_di
(
    id                BIGSERIAL PRIMARY KEY NOT NULL,
    annexure_d_id     BIGINT                NOT NULL,
    replace_item_name VARCHAR(255)          NOT NULL,
    voucher_number    VARCHAR(255)          NOT NULL,
    date              TIMESTAMP             NOT NULL,
    price             BIGINT                NOT NULL,
    file_name         VARCHAR(255),
    FOREIGN KEY (annexure_d_id) REFERENCES annexure_d (id) ON DELETE CASCADE
);