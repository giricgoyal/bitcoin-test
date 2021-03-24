import { Request, Response } from 'express';
import axios from 'axios';

export const getTransactionById = (req: Request, res: Response) => {
    const addressId = req.params.addressId;
    console.log(addressId);
    axios.request({
        method: 'GET',
        url: `https://api.cryptoapis.io/v1/bc/btc/mainnet/address/${addressId}/transactions`,
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': 'd45bcc3bb736ddd5d0bd7fac45149f24cf4491a4',
        }
    }).then(response => {
        res.json({
            data: response.data,
        });
    }).catch(err => {
        console.log(err);
    });
}

export const getById = (req: Request, res: Response) => {
    const { id } = req.params;
    res.status(200).send({
        data: {
            id
        }
    });
}
