CREATE TABLE "users"(
    "id" VARCHAR(100) NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "phone" VARCHAR(25) NOT NULL,
    "full_name" VARCHAR(50) NOT NULL,
    "status" VARCHAR(25) NOT NULL,
    "balance" VARCHAR(200) NOT NULL,
    "img_profile" VARCHAR(250) NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");
ALTER TABLE
    "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");