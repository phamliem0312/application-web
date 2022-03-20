module.exports = mongoose => {
    const Schema = mongoose.Schema;
    const userSchema = new Schema(
        {
            username: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            email: {
                type: String
            },
            phoneNumber: {
                type: String
            },
            roleId: {
                type: Schema.Types.ObjectId,
                ref: 'role'
            },
            createdAt: { type: Date, default: new Date() },
            updatedAt: { type: Date, default: new Date() }
        },
        { timestamps: true }
    );
    userSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const User = mongoose.model("user", userSchema);
    return User;
};