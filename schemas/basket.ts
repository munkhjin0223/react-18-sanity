import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'basket',
  title: 'Basket',
  type: 'document',
  fields: [
    defineField({
      name: 'productId',
      title: 'Бүтээгдэхүүний дугаар',
      type: 'string',
    }),
    defineField({
      name: 'productName',
      title: 'Бүтээгдэхүүний нэр',
      type: 'string',
    }),
    defineField({
      name: 'productPrice',
      title: 'Бүтээгдэхүүний үнэ',
      type: 'number',
    }),
    defineField({
      name: 'productQuantity',
      title: 'Бүтээгдэхүүний тоо',
      type: 'number',
    }),
    defineField({
      name: 'userId',
      title: 'Хэрэглэгчийн дугаар',
      type: 'string',
    }),
  ],
})
