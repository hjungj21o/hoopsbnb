class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :session_token, :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token

    attr_reader :password

    has_many :arenas,
        primary_key: :id,
        foreign_key: :gm_id,
        class_name: :Arena

    has_many :bookings,
        primary_key: :id,
        foreign_key: :hooper_id,
        class_name: :bookings
    
    has_many :reviews,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Review


    def self.find_by_credentials(username, password)
        user = user.find_by(username: username)
        return nil if !@user
        user.is_password?(password) ? @user : nil
    end

    def is_password?(password)
        bcrypt_password = BCrypt::Password.new(self.password_digest)
        bcrypt_password.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrpyt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.update!(session_token: User.generate_session_token)
        self.session_token
    end
end
