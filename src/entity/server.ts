import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Server {
	@PrimaryColumn()
	id: string;

	@Column()
	logChannel: string;

	@Column()
	isEnabled: boolean;

	@Column()
	modRoles: string[];

	@Column()
	channelCreate: true;

	@Column()
	channelDelete: true;

	@Column()
	channelUpdate: true;

	@Column()
	emojiCreate: true;

	@Column()
	emojiDelete: true;

	@Column()
	emojiUpdate: true;

	@Column()
	guildBanAdd: true;

	@Column()
	guildBanRemove: true;

	@Column()
	guildMemberAdd: true;

	@Column()
	guildMemberRemove: true;

	@Column()
	guildMemberSpeaking: true;

	@Column()
	guildMemberUpdate: true;

	@Column()
	guildUpdate: true;

	@Column()
	messageDelete: true;

	@Column()
	messageDeleteBulk: true;

	@Column()
	messageReactionRemoveAll: true;

	@Column()
	messageUpdate: true;

	@Column()
	roleCreate: true;

	@Column()
	roleDelete: true;

	@Column()
	roleUpdate: true;

	@Column()
	userUpdate: true;

	@Column()
	voiceStateUpdate: true;
}
