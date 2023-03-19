import { productSlice } from "./productSlice";

const productApi = productSlice.injectEndpoints({
    endpoints: (build) => ({
        getProduct: build.query({
            query: () => '/',
            providesTags: ['Product'],
        }),
        // getSingleProduct: builder.query({
        //     query: (id) => `/product/${id}`,
        //     providesTags: ['Product'],
        // }),
        addProduct: build.mutation({
            query: (data) => ({
                url: '/add',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Product'],
        }),
        removeProduct: build.mutation({
            query: (id) => ({
                url: `/remove/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Product']
        })
    })
})

export const {useGetProductQuery, useAddProductMutation, useRemoveProductMutation} = productApi