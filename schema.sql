CREATE TABLE users (
  id                  serial primary key,
  username            character varying(255),
  encrypted_password  character varying(255)
);

INSERT INTO users (username, encrypted_password) VALUES ('Nick', 'pass1'), ('Pete', 'pass2');
