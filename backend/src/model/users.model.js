const { query } = require('express');
const db = require('../../helper/connection')
const { v4: uuidv4 } = require('uuid');

const usersModel = {
    // CREATE
    create: ({ phone, status, balance, img_profile }) => {
        return new Promise((resolve, reject) => {
            db.query(
                `INSERT INTO users (id, phone, status, balance, img_profile) 
                VALUES ('${uuidv4()}','${phone}','${status}','${balance}','${img_profile}'`,
                (err, result) => {
                    if (err) {
                        return reject(err.message)
                    } else {
                        return resolve({ phone, status, balance, img_profile })
                    }
                }
            )
        })
    },

    // READ
    query: (search, status, sortBy, limit, offset) => {
        let orderQuery = `ORDER BY full_name ${sortBy} LIMIT ${limit} OFFSET ${offset}`

        if (!search && !status) {
            return orderQuery
        } else if (search && status) {
            return `WHERE full_name ILIKE '%${search}%' AND status ILIKE '${status}%' ${orderQuery}`
        } else if (search || status) {
            return `WHERE full_name ILIKE '%${search}%' OR status ILIKE '${status}%' ${orderQuery}`
        } else {
            return orderQuery
        }
    },

    read: function (search, status, sortBy = 'ASC', limit = 25, offset = 0) {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * from users ${this.query(search, status, sortBy, limit, offset)}`,
                (err, result) => {
                    // console.log(result);
                    if (err) {
                        return reject(err.message)
                    } else {
                        return resolve(result.rows)
                    }
                }
            )
        })
    },

    readDetail: (id) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * from users WHERE id='${id}'`,
                (err, result) => {
                    if (err) {
                        return reject(err.message)
                    } else {
                        return resolve(result.rows[0])
                    }
                }
            );
        })
    },

    // SINGLE
    update: function (req, id) {
        return new Promise((success, failed) => {
            const { email, phone, full_name, status, balance, img_profile } = req.body
            db.query(`SELECT * FROM users WHERE id='${id}'`, (error, result) => {
                if (error) {
                    return failed(error.message)
                } else {
                    // console.log(result);
                    if (result.rows.length < 1) {
                        return failed('Id not found!')
                    } else {
                        db.query(
                            `UPDATE users SET 
                                email='${email || result.rows[0].email}', 
                                phone='${phone || result.rows[0].phone}', 
                                full_name='${full_name || result.rows[0].full_name}', 
                                status='${status || result.rows[0].status}', 
                                balance='${balance || result.rows[0].balance}', 
                                img_profile='${(req.file != undefined) ? req.file.filename : result.rows[0].img_profile}' 
                                WHERE id='${id}'`, (error) => {
                            if (error) {
                                return failed(error.message)
                            } else {
                                return success(result.rows)
                            }
                        })
                    }
                }
            })
        })
    },

    // DELETE
    // untuk remove tergantung paramnya saja, untuk kasus dibawah ini yaitu id.
    remove: (id) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE from users WHERE id='${id}' RETURNING img_profile`,
                (err, result) => {
                    console.log(result);
                    if (err) {
                        return reject(err.message)
                    } else {
                        return resolve(result.rows)
                    }
                }
            )
        })
    }
}

module.exports = usersModel