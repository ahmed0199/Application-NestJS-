import { Logger } from '@nestjs/common';
import { Entity, ObjectIdColumn, ObjectId, Column, BeforeInsert, AfterInsert, AfterUpdate, AfterRemove, BeforeRemove, AfterLoad } from 'typeorm';


@Entity()
export class User {
    @BeforeInsert()
    loginsert(){
        Logger.log('user ajouté(e)')
    }
    @AfterInsert()
    logafter(){
        Logger.log('ajouté')
    }
    @AfterUpdate()
    logupdate(){
        Logger.log('update terminé(e)')
    }
    @AfterRemove()
    remove1(){
        Logger.log('remove termié', this.id)
    }
    @BeforeRemove()
    remove2(){
        Logger.log('remove en cours', this.id)
    }
    @AfterLoad()
    Load(){
        Logger.log('Load termié', this.id)
    }
   

@ObjectIdColumn()
id: ObjectId;


@Column()
email: string;

@Column()
password: string;

@Column()
active: boolean;

}