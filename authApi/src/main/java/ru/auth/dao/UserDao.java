package ru.auth.dao;

import ru.auth.models.UserModel;

import java.util.ArrayList;
import java.util.List;

public class UserDao {
    private final List<UserModel> store = new ArrayList<>();

    public UserDao() {
        store.add(new UserModel(1, "Pavel", "1", UserModel.ROLE.ADMIN));
    }

    public boolean userIsExist(final String login, final String password) {

        boolean result = false;

        for (UserModel user : store) {
            if (user.getLogin().equals(login) && user.getPassword().equals(password)) {
                result = true;
                break;
            }
        }

        return result;
    }
}
