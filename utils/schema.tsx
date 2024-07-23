import { boolean, PgBoolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput=pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData'),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy'),
    createAt:varchar('createAt')

});

export const UserSubscription=pgTable('userSubscription',{
    id:serial('id').primaryKey(),
    email:varchar('email'),
    userName:varchar('userName'),
    active:boolean('active'),
    paymentId:varchar('paymentId'),
    joinDate:varchar('joinDate')

    
})