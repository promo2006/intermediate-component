// General settings
var REQUEST_TIMEOUT = 20000;

// Public Object InconcertOnline
function InconcertOnlineSDK(serverHost, serverPort, serverHttps) {

    // Load or initialize API values
    this.serverHost = serverHost || localStorage.getItem("serverHost") || null;
    this.serverPort = serverPort || localStorage.getItem("serverPort") || "80";
    this.serverHttps = serverHttps || (localStorage.getItem("serverHttps") === "true");

    // Load or initialize session values
    this.currentSessionUser = localStorage.getItem("currentSessionUser") || null;
    this.currentSessionToken = localStorage.getItem("currentSessionToken") || null;

    try {
        // If theres an stored user try to parse it
        if (this.currentSessionUser) this.currentSessionUser = JSON.parse(this.currentSessionUser);
    } catch (e) {
        // If it's corrupt then clear the session
        ClearCurrentSession();
    }

    /////////////////
    // SDK methods //
    /////////////////

    this.Login = function(userId, password) {

        return new Promise(function(resolve, reject) {

            // Check if there's every needed parameter
            if (!userId || !password) {
                // Missing input parameter
                reject("Missing input parameter");
                // Interrupt execution
                return;
            }

            // Check if theres stored session
            if (!this.serverHost) {
                // No session token
                reject("No API server host set");
                // Interrupt execution
                return;
            }

            // Set up request data
            var data = {
                userId: userId,
                password: password
            };

            // Request URL
            var url = this.GetBaseURL() + "/auth/login";

            // Send ajax request
            $.ajax({
                url: url,
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(data),
                timeout: REQUEST_TIMEOUT,
                dataType: "json",
                sdk: this,
                success: function(response, textStatus, jqXHR) {
                    // Store current session data
                    this.sdk.StoreCurrentSession(response.data.loggedUser, response.data.session);
                    // Resolve promise
                    resolve({
                        status: response.status,
                        description: response.description,
                        data: response.data
                    });
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // Reject promise
                    reject(jqXHR && jqXHR.responseJSON || errorThrown || jqXHR.statusText);
                }
            });
        }.bind(this));
    };

    this.Logout = function() {

        return new Promise(function(resolve, reject) {

            // Check if there's an stored session
            if (!this.currentSessionToken) {
                // No session token
                reject("No session token found");
                // Interrupt execution
                return;
            }

            // Set up request data
            var data = {
                session: this.currentSessionToken
            };

            // Request URL
            var url = this.GetBaseURL() + "/auth/logout";

            // Send ajax request
            $.ajax({
                url: url,
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(data),
                timeout: REQUEST_TIMEOUT,
                dataType: "json",
                sdk: this,
                success: function(response, textStatus, jqXHR) {
                    // Clear crrent session data
                    this.sdk.ClearCurrentSession();
                    // Resolve promise
                    resolve({
                        status: response.status,
                        description: response.description,
                        data: response.data
                    });
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // Clear crrent session data
                    this.sdk.ClearCurrentSession();
                    // Reject promise
                    reject(jqXHR && jqXHR.responseJSON || errorThrown || jqXHR.statusText);
                }
            });
        }.bind(this));
    };

    this.GetContacts = function(searchCriteria, searchExpression) {

        return new Promise(function(resolve, reject) {

            // Check if there's every needed parameter
            if (!searchCriteria || !searchExpression) {
                // Missing input parameter
                reject("Missing input parameter");
                // Interrupt execution
                return;
            }

            // Check if there's an stored session
            if (!this.currentSessionToken) {
                // No session token
                reject("No session token found");
                // Interrupt execution
                return;
            }

            // Request URL
            var url = this.GetBaseURL() + "/api/contact/get_contacts/" + searchCriteria + "/" + searchExpression;

            // Send ajax request
            $.ajax({
                url: url,
                type: "GET",
                contentType: "application/json",
                timeout: REQUEST_TIMEOUT,
                dataType: "json",
                sdk: this,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader ("Authorization", "bearer " + this.sdk.currentSessionToken);
                },
                success: function(response, textStatus, jqXHR) {
                    // Resolve promise
                    resolve({
                        status: response.status,
                        description: response.description,
                        data: response.data
                    });
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // If the session is invalid, clear the local stored session
                    if (jqXHR.status === 401) this.sdk.ClearCurrentSession();
                    // Reject promise
                    reject(jqXHR && jqXHR.responseJSON || errorThrown || jqXHR.statusText);
                }
            });
        }.bind(this));
    };

    this.GetContact = function(id) {

        return new Promise(function(resolve, reject) {

            // Check if there's every needed parameter
            if (!id) {
                // Missing input parameter
                reject("Missing input parameter");
                // Interrupt execution
                return;
            }

            // Check if there's an stored session
            if (!this.currentSessionToken) {
                // No session token
                reject("No session token found");
                // Interrupt execution
                return;
            }

            // Request URL
            var url = this.GetBaseURL() + "/api/contact/get_contact/" + id;

            // Send ajax request
            $.ajax({
                url: url,
                type: "GET",
                contentType: "application/json",
                timeout: REQUEST_TIMEOUT,
                dataType: "json",
                sdk: this,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader ("Authorization", "bearer " + this.sdk.currentSessionToken);
                },
                success: function(response, textStatus, jqXHR) {
                    // Resolve promise
                    resolve({
                        status: response.status,
                        description: response.description,
                        data: response.data
                    });
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // If the session is invalid, clear the local stored session
                    if (jqXHR.status === 401) this.sdk.ClearCurrentSession();
                    // Reject promise
                    reject(jqXHR && jqXHR.responseJSON || errorThrown || jqXHR.statusText);
                }
            });
        }.bind(this));
    };

    this.DeleteContact = function(id) {

        return new Promise(function(resolve, reject) {

            // Check if there's every needed parameter
            if (!id) {
                // Missing input parameter
                reject("Missing input parameter");
                // Interrupt execution
                return;
            }

            // Check if there's an stored session
            if (!this.currentSessionToken) {
                // No session token
                reject("No session token found");
                // Interrupt execution
                return;
            }

            // Set up request data
            var data = {
                contact: {
                    id: id
                }
            };

            // Request URL
            var url = this.GetBaseURL() + "/api/contact/delete_contact";

            // Send ajax request
            $.ajax({
                url: url,
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(data),
                timeout: REQUEST_TIMEOUT,
                dataType: "json",
                sdk: this,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader ("Authorization", "bearer " + this.sdk.currentSessionToken);
                },
                success: function(response, textStatus, jqXHR) {
                    // Resolve promise
                    resolve({
                        status: response.status,
                        description: response.description,
                        data: response.data
                    });
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // If the session is invalid, clear the local stored session
                    if (jqXHR.status === 401) this.sdk.ClearCurrentSession();
                    // Reject promise
                    reject(jqXHR && jqXHR.responseJSON || errorThrown || jqXHR.statusText);
                }
            });
        }.bind(this));
    };

    this.SaveContact = function(
        id, email, title,
        firstname, lastname, language,
        owner, company, position,
        phone, mobile, fax,
        website, address1, address2,
        country, state, city,
        zip, facebook, twitter,
        skype, googlePlus, linkedin,
        instagram, comments, customData) {

        return new Promise(function(resolve, reject) {

            // Check if there's every needed parameter
            if (!id) {
                // Missing input parameter
                reject("Missing input parameter");
                // Interrupt execution
                return;
            }

            // Check if there's an stored session
            if (!this.currentSessionToken) {
                // No session token
                reject("No session token found");
                // Interrupt execution
                return;
            }

            // Set up request data
            var data = {
                id: id,
                email: email,
                title: title,
                firstname: firstname,
                lastname: lastname,
                language: language,
                owner: owner,
                company: company,
                position: position,
                phone: phone,
                mobile: mobile,
                fax: fax,
                website: website,
                address1: address1,
                address2: address2,
                country: country,
                state: state,
                city: city,
                zip: zip,
                facebook: facebook,
                twitter: twitter,
                skype: skype,
                googlePlus: googlePlus,
                linkedin: linkedin,
                instagram: instagram,
                comments: comments,
                customData: JSON.stringify(customData)
            };

            // Request URL
            var url = this.GetBaseURL() + "/api/contact/save_contact";

            // Send ajax request
            $.ajax({
                url: url,
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(data),
                timeout: REQUEST_TIMEOUT,
                dataType: "json",
                sdk: this,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader ("Authorization", "bearer " + this.sdk.currentSessionToken);
                },
                success: function(response, textStatus, jqXHR) {
                    // Resolve promise
                    resolve({
                        status: response.status,
                        description: response.description,
                        data: response.data
                    });
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // If the session is invalid, clear the local stored session
                    if (jqXHR.status === 401) this.sdk.ClearCurrentSession();
                    // Reject promise
                    reject(jqXHR && jqXHR.responseJSON || errorThrown || jqXHR.statusText);
                }
            });
        }.bind(this));
    };

    ///////////////////////
    // General functions //
    ///////////////////////

    this.GetBaseURL = function() {
        return 	(this.serverHttps === true ? "https://" : "http://") +
                (this.serverHost ? this.serverHost : "localhost") +
                (this.serverPort && ((this.serverHttps === true && this.serverPort !== "443") || (this.serverHttps !== true && this.serverPort !== "80")) ? ":" + this.serverPort : "");
    };

    this.StoreCurrentSession = function(user, token) {
        // Store crrent session data
        this.currentSessionUser = user;
        this.currentSessionToken = token;
        // Store session and user into browser's local storage
        localStorage.setItem("serverHost", this.serverHost);
        localStorage.setItem("serverPort", this.serverPort);
        localStorage.setItem("serverHttps", this.serverHttps);
        localStorage.setItem("currentSessionUser", JSON.stringify(this.currentSessionUser));
        localStorage.setItem("currentSessionToken", this.currentSessionToken);
    };

    this.ClearCurrentSession = function() {
        // Store crrent session data
        this.currentSessionUser = null;
        this.currentSessionToken = null;
        // Remove session and user from browser's local storage
        localStorage.removeItem("serverHost");
        localStorage.removeItem("serverPort");
        localStorage.removeItem("serverHttps");
        localStorage.removeItem("currentSessionUser");
        localStorage.removeItem("currentSessionToken");
    };
}
