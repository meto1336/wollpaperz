CREATE TABLE collection(

    collectionID INT NOT NULL,
    title VARCHAR(36),
    accountID VARCHAR(36),
    primary key(collectionID),
    FOREIGN KEY (accountID) REFERENCES accounts(accountID)


)