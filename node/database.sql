
CREATE DATABASE ABM;


CREATE TABLE admine(admine_id SERIAL PRIMARY KEY,
                                             noma VARCHAR(255),
                                                  emaila VARCHAR(255),
                                                         mot_de_passe VARCHAR(255));

SElect *
from admine
DROP TABLE client
cREATE TABLE client(client_id SERIAL PRIMARY KEY, nomc VARCHAR(255), emailc VARCHAR(255), adresse VARCHAR(255), admine_id SERIAL REFERENCES admine (admine_id));


SElect *
from client
DROP TABLE produit
CREATE TABLE produit (produit_id SERIAL PRIMARY KEY,
                                                nomp VARCHAR(255),
                                                     image VARCHAR(255),
                                                           prix VARCHAR(255),
                                                                admine_id SERIAL REFERENCES admine (admine_id));


SElect *
from produit               


DROP TABLE commande
CREATE TABLE commande(commande_id SERIAL PRIMARY KEY,
                                                 PrixT VARCHAR(255),
                                                       time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                                                       nomclient VARCHAR(255),
                                                                                             client_id VARCHAR(255));


                                      
                                                                     



SElect *
from commande



DROP TABLE lignecommande
cREATE TABLE lignecommande(lignecommande_id SERIAL PRIMARY KEY,nomproduit VARCHAR(255), prixunitaire VARCHAR(255),quantite VARCHAR(255)
,soustotale VARCHAR(255) ,prixtotale VARCHAR(255), commande_id SERIAL);




SElect *
from lignecommande
                                                     
                                                                