
import express from 'express';
import {client} from './../../mongodb.mjs'
import { ObjectId } from 'mongodb';
let router = express.Router();
const dbName = "AUTH-DB";
const db = client.db(dbName);
const col = db.collection("users");

let userExists;

// router.post('/login', (req, res, next) => {
//     console.log('this is login!', new Date());
//     res.send('this is login v1' + new Date());
// })

router.post('/signup', async (req, res, next) => {
    console.log('this is signup!', new Date());


    if (
        (req.body.email.trim().length == 0) || (req.body.password.trim().length == 0)
    ) {
        res.status(403);
        res.send(`required parameters missing, 
        example request body:
        {
            title: "abc post title",
            text: "some post text"
        } `);
        return;
    }

    try{

    await client.connect();

    const filter = { email: req.body.email };
    const myDoc = await col.findOne(filter);


    if(!myDoc){



                    try{
                        await client.connect();
                        console.log("Connected to Atlas");
                        let personDocument = {

                            email: req.body.email,
                            password: req.body.password,

                        };

                        const p = await col.insertOne(personDocument);

                        res.send('user created');
                        console.log("Created User");

                        await client.close();
                        console.log("Disconnected Atlas");


                }


                catch(err){

                    console.log('Error in posting');
                    res.send('Error: ' + err);
                    await client.close();

                    
                          }


            }else{

               userExists = true;
                console.log('error error', err);


            }

            await client.close();




        }catch (err){


            await client.close();
            
            if(userExists){
                console.log('Error email already exists');
                res.send('Error email already exists');
            }else{
                console.log('error: ' + err);
                res.send('Error:' + err);
            }


        }


    
})



export default router

