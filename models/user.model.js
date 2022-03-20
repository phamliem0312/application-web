module.exports = mongoose => {
    const schema = mongoose.model(
        "user",
        mongoose.Schema(
            {
                username: {
                    type: String,
                    required: true
                },
                password: {
                    type: String
                },
                email: {
                    type: String
                },
                phoneNumber: {
                    type: String
                },
                roleId: {
                    type: Schema.Types.ObjectId,
                    ref: 'role',
                    required: true,
                },
                createdAt: { type: Date, default: new Date() },
                updatedAt: { type: Date, default: new Date() }
            },
            { timestamps: true }
        )
    );
    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const User = mongoose.model("user", schema);
    return User;
};