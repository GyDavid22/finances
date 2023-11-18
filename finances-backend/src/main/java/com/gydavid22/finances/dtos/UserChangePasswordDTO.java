package com.gydavid22.finances.dtos;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class UserChangePasswordDTO {
    private char[] oldpassword;
    private char[] newpassword;

    public UserChangePasswordDTO() {
    }

    public UserChangePasswordDTO(char[] oldpassword, char[] newpassword) {
        this.oldpassword = oldpassword;
        this.newpassword = newpassword;
    }

    public char[] getOldpassword() {
        return oldpassword;
    }

    public void setOldpassword(char[] oldpassword) {
        this.oldpassword = oldpassword;
    }

    public char[] getNewpassword() {
        return newpassword;
    }

    public void setNewpassword(char[] newpassword) {
        this.newpassword = newpassword;
    }
}
