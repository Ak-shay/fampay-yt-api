const { Sequelize, DataTypes, Model, NOW } = require('sequelize');
const sequelize = require('../config/database');

// TODO: add indexes

class Video extends Model {
    getTitle() {
        return this.title;
    }
}

Video.init({
    _id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT('medium'),
        allowNull: false
    },
    published_date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    timestamps: false,
    indexes: [
        {
            unique: false,
            fields:['title'],
        }
    ]
});

module.exports.Video = sequelize.model('Video', Video);