const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

app.post("/admine", async (req, res) => {
  try {
    const { noma, emaila, mot_de_passe } = req.body;
    let sql = `INSERT INTO admine (noma, emaila, mot_de_passe) VALUES ('${noma}','${emaila}','${mot_de_passe}') RETURNING *`;
    const newadmine = await pool.query(sql);

    res.json(newadmine.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/admine", async (req, res) => {
  try {
    let sql = `SELECT * FROM admine`;
    console.log(sql);
    const alladmine = await pool.query(sql);
    res.json(alladmine.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/adminecom", async (req, res) => {
  try {
    const { emaila, mot_de_passe } = req.body;

    let sql = `
    SELECT *  
    From  admine 
    WHERE  admine.emaila='${emaila}'  AND admine.mot_de_passe='${mot_de_passe}' `;
    const newcondition = await pool.query(sql);
    res.json(newcondition.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.delete("/client/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let sql = `DELETE   FROM client WHERE client_id = '${id}'`;
    const deleteclient = await pool.query(sql);
    res.json("client was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.delete("/produit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let sql = `DELETE   FROM produit WHERE produit_id = '${id}'`;
    const deleteproduit = await pool.query(sql);
    res.json("produit was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.put("/client/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nomc, emailc, adresse } = req.body;
    let sql = `UPDATE client SET nomc='${nomc}' , emailc ='${emailc}' , adresse='${adresse}'    WHERE client_id='${id}'  `;
    const updateclient = await pool.query(sql);
    res.json("client was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/produit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nomp, image, prix } = req.body;
    let sql = `UPDATE produit SET nomp='${nomp}' , image ='${image}' , prix='${prix}'    WHERE produit_id='${id}'  `;
    const updateproduit = await pool.query(sql);
    res.json("produit was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/client", async (req, res) => {
  try {
    let sql = `SELECT * FROM client`;
    console.log(sql);
    const allclient = await pool.query(sql);
    res.json(allclient.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/client/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let sql = `SELECT * FROM client WHERE client_id ='${id}' `;

    const allclient = await pool.query(sql);
    res.json(allclient.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/produit", async (req, res) => {
  try {
    let sql = `SELECT * FROM produit`;
    const allproduit = await pool.query(sql);
    res.json(allproduit.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/client", async (req, res) => {
  try {
    const { nomc, emailc, adresse, admine_id } = req.body;
    let sql = `INSERT INTO client ( nomc ,emailc , adresse,admine_id ) VALUES ('${nomc}','${emailc}','${adresse}', ${admine_id}) RETURNING *`;

    const newclient = await pool.query(sql);

    res.json(newclient.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/produit", async (req, res) => {
  try {
    const { nomp, image, prix, admine_id } = req.body;
    let sql = `INSERT INTO produit (nomp, image, prix, admine_id) VALUES ('${nomp}','${image}','${prix}',${admine_id}) RETURNING *`;
    const newproduit = await pool.query(sql);

    res.json(newproduit.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/clientnom", async (req, res) => {
  try {
    let sql = `SELECT  * FROM client `;
    console.log(sql);
    const client = await pool.query(sql);
    res.json(client.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/commande", async (req, res) => {
  try {
    let sql = ` SElect * from commande `;

    const allcommande = await pool.query(sql);
    res.json(allcommande.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/getlignecommande", async (req, res) => {
  try {
    let sql = `SElect * from lignecommande `;

    // console.log(sql);
    const alllignecommande = await pool.query(sql);
    res.json(alllignecommande.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.post("/postcommande", async (req, res) => {
  try {
    const { prixt, clientId, clientNom } = req.body;
    let sql = `INSERT INTO commande (PrixT,client_id,nomclient) VALUES ('${prixt}','${clientNom}','${clientId}')  RETURNING * `;
    const newcomm = await pool.query(sql);
    res.json(newcomm.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/ligne", async (req, res) => {
  try {
    const { nomp, prix, quantite, soustotale, prixtotale, idcomd } = req.body;
    let sql = `INSERT INTO lignecommande (nomproduit, prixunitaire,quantite,soustotale,prixtotale,commande_id) VALUES ('${quantite}' ,'${prix}','${soustotale}','${prixtotale}','${nomp}','${idcomd}') RETURNING *`;
    const newlignecommande = await pool.query(sql);

    res.json(newlignecommande.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
