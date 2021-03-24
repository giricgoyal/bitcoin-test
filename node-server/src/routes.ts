import { addressRouter } from './address/router';

export const initRoutes = (app) => {
    app.use("/api/v1/address", addressRouter)
}